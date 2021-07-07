const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const router = express.Router()

const config = require("../config/config")
const promise = require("../util/promise")
const userService = require("../services/user")

router.post("/register", async (req, res) => {
    const data = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        repeatPassword: req.body.repeatPassword
    }
    if(Object.values(data).some(x => x == "")) {
        res.status(400)
        return res.json({message: "All fields are required"})
    }
    if(data.password !== data.repeatPassword) { 
        res.status(400)
        return res.json({message: "Passwords must match"})
    }
    const hashedPassword = await bcrypt.hash(data.password, config.SALT_ROUNDS) 
    const [user, error] = await promise(userService.createUser({email: data.email, username: data.username, hashedPassword}))
    if(error) { //email is taken
        res.status(400)
        return res.json({message: "Email is already taken"})
    } 
    const token = jwt.sign({email: user.email, _id: user._id, username: user.username}, config.TOKEN_SECRET)
    res.cookie(config.COOKIE_NAME, token)
    
    res.json(user)
})
router.post("/login", async (req, res) => {
    const data = {
        email: req.body.email,
        password: req.body.password,
    }
    if(Object.values(data).some(x => x == "")) {
        res.status(400)
        return res.json({message: "All fields are required"})
    }
    const user = await userService.findUserByEmail(data.email)
    if(!data) {
        res.status(400)
        return res.json({message: "Wrong username or password"})
    }
    const isMatch = await bcrypt.compare(data.password, user.hashedPassword)
    if(!isMatch) {
        res.status(400)
        return res.json({message: "Wrong username or password"})
    }
    const token = jwt.sign({email: user.email, _id: user._id, username: user.username}, config.TOKEN_SECRET)
    res.cookie(config.COOKIE_NAME, token)
    
    res.json(user)
})
router.post("/logout", async (req, res) => {
    res.clearCookie(config.COOKIE_NAME)

    res.json({})
})

module.exports = router