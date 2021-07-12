const movieService = require("../services/movie")

async function preloadMovie() {
    return async (req, res, next) => {
        const movie = await movieService.getById(req.params.id)
        req.movie = movie

        next()
    }
}

module.exports = {
    preloadMovie
}
