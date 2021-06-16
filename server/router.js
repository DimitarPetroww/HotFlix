const baseRouter = require("./controllers/baseRouter")

module.exports = (app) => {
    app.use("/api", baseRouter)
};