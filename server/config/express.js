const express = require('express');
const cp = require("cookie-parser")
const config = require("./config")
const cors = require("cors")
const path = require("path")

module.exports = (app) => {
    app.use(express.urlencoded({ extended: true }))
    app.use(cors({
        origin: config.origin,
        credentials: true,
    }))
    app.use(express.static(path.join(__dirname, 'dist/front-end')));
    app.use(cp())
    app.use(express.json())

};