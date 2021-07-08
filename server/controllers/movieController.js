const express = require("express")
const router = express.Router()
const promise = require("../util/promise")
const movieService = require("../services/movie")
const { isAuth } = require("../middlewares/guards")

router.get("/", async (req, res) => {
    const [movies, error] = await promise(movieService.getAll())
    if (error) {

    }
    res.json(movies)
})
router.get("/:id", async (req, res) => {
    const [movie, error] = await promise(movieService.getById(req.params.id))
    if (error) {

    }
    res.json(movie)
})
router.post("/", isAuth(), async (req, res) => {
    const data = {
        name: req.body.name,
        description: req.body.description,
        trailerUrl: req.body.trailerUrl,
        imageUrl: req.body.imageUrl,
        genre: req.body.genre,
        author: req.body.author,
    }
    console.log(req.body.trailerID, 1);
    console.log(req.body.imageID, 2);
    console.log(data, 3);
    if (Object.values(data).some(x => x == "")) {
        res.status(400)
        return res.json({ message: "All fields are required" })
    }
    data.likes = []
    data.owner = req.user._id
    data.comments = []

    res.json(data)
})

module.exports = router