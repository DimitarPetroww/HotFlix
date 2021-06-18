const mongoose = require('mongoose');
const config = require("./config")

module.exports = async (app) => {
    return new Promise((resolve, reject) => {
        console.log(config.DB_CONNECTION);
        mongoose.connect(config.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection
        db.on("error", (err) => {
            reject(err.message)
        })
        db.on("open", () => {
            console.log("connected");
            resolve("connected!")
        })
    })
}