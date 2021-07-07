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

    }
    if(data.password !== data.repeatPassword) { 

    }
    const hashedPassword = await bcrypt.hash(data.password, config.SALT_ROUNDS) 
    const [user, error] = await promise(userService.createUser({email: data.email, username: data.username, hashedPassword}))
    if(error) { //email is taken
        
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

    }
    const user = await userService.findUserByEmail(data.email)
    if(!data) {

    }
    const isMatch = await bcrypt.compare(data.password, user.hashedPassword)
    if(!isMatch) {

    }
    const token = jwt.sign({email: user.email, _id: user._id, username: user.username}, config.TOKEN_SECRET)
    res.cookie(config.COOKIE_NAME, token)
    
    res.json(user)
})

module.exports = router