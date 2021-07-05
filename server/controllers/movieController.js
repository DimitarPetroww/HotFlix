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
router.post("/create", async (req, res) => {
    console.log(req.body);
})

module.exports = router