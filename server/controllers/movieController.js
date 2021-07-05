const express = require("express")
const router = express.Router()

const promise = require("../util/promise")
const movieService = require("../services/movie")

router.get("/", async (req, res) => {
    const [movies, error] = await promise(movieService.getAll())
    if(error) {
        
    }
    res.json(movies)
})
router.get("/:id", async (req, res) => {
    const [movie, error] = await promise(movieService.getById(req.params.id))
    if(error) {
        
    }
    res.json(movie)
})
router.post("/", async (req, res) => {
    const data = {
        name: req.body.name,
        trailerID: req.body.trailerID,
        genre: req.body.genre,
        author: req.body.author,
        imageUrl: req.body.imageUrl,
        description: req.body.description
    }
    console.log(data);
})

module.exports = router