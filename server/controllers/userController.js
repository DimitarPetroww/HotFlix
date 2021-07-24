const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const router = express.Router()

const config = require("../config/config")
const promise = require("../util/promise")
const userService = require("../services/user")
const { isAuthenticated } = require("../middlewares/guards")

router.post("/register", async (req, res) => {
    const data = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        repeatPassword: req.body.repeatPassword
    }
    if (Object.values(data).some(x => x == "")) {
        res.status(400)
        return res.json({ message: "All fields are required" })
    }
    if (data.password !== data.repeatPassword) {
        res.status(400)
        return res.json({ message: "Passwords must match" })
    }
    const hashedPassword = await bcrypt.hash(data.password, config.SALT_ROUNDS)
    const [user, error] = await promise(userService.createUser({ email: data.email, username: data.username, hashedPassword }))
    if (error) { //email is taken
        res.status(400)
        return res.json({ message: "Email is already taken" })
    }
    const token = jwt.sign({ email: user.email, _id: user._id, username: user.username }, config.TOKEN_SECRET)
    res.cookie(config.COOKIE_NAME, token, { httpOnly: true, maxAge: 900000 })

    res.json(user)
})
router.post("/login", async (req, res) => {
    const data = {
        email: req.body.email,
        password: req.body.password,
    }
    if (Object.values(data).some(x => x == "")) {
        res.status(400)
        return res.json({ message: "All fields are required" })
    }
    const user = await userService.findUserByEmail(data.email)
    if (!user) {
        res.status(400)
        return res.json({ message: "Wrong email or password" })
    }
    const isMatch = await bcrypt.compare(data.password, user.hashedPassword)
    if (!isMatch) {
        res.status(400)
        return res.json({ message: "Wrong email or password" })
    }
    const token = jwt.sign({ email: user.email, _id: user._id, username: user.username }, config.TOKEN_SECRET)
    res.cookie(config.COOKIE_NAME, token, { httpOnly: true, maxAge: 900000 })

    res.json(user)
})
router.get("/isAuth", async (req, res) => {
    if (req.user) {
        return res.json(req.user)
    }
    res.json(undefined)
})
router.post("/logout", isAuthenticated(), async (req, res) => {
    res.clearCookie(config.COOKIE_NAME)

    res.json({})
})
router.get("/profile", isAuthenticated(), async (req, res) => {
    const [user, error] = await promise(userService.getUser(req.user._id))
    if (error) {
        res.status(400)
        return res.json({ message: error.message })
    }
    res.json(user)
})
router.post("/edit", isAuthenticated(), async (req, res) => {
    const [user, error] = await promise(userService.getUser(req.body._id))
    if (error) {
        res.status(400)
        return res.json({ message: error.message })
    }
    const isMatch = await bcrypt.compare(req.body.confirmPassword, user.hashedPassword)
    if (!isMatch) {
        res.status(400)
        return res.json({ message: "Incorrect Password" })
    }
    const [newUser, err] = await promise(userService.editUser(user._id, req.body.email, req.body.username))
    if (err) {
        res.status(400)
        return res.json({ message: err.message })
    }
    res.json(newUser)
})

module.exports = router