const movieController = require("./controllers/movieController")
const userController = require("./controllers/userController")

module.exports = (app) => {
    app.use("/api/movies", movieController)
    app.use("/api/user", userController)
};