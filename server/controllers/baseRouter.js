const express = require("express")

const router = express.Router()

router.get("/asd", (req, res) => res.json(["qnko", "asd"]))

module.exports = router