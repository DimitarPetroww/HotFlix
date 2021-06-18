const movieController = require("./controllers/movieController")

module.exports = (app) => {
    app.use("/api/movies", movieController)
};