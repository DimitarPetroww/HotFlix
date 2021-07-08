const express = require("express")
const router = express.Router()
const promise = require("../util/promise")
const movieService = require("../services/movie")
const { isAuth } = require("../middlewares/guards")
const cloudinary = require("cloudinary").v2

router.get("/", async (req, res) => {
    const request = req.query.offset ? movieService.getNext(Number(req.query.offset)) : movieService.getAll()
    const [movies, error] = await promise(request)
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
    if (Object.values(data).some(x => x == "")) {
        res.status(400)
        cloudinary.uploader.destroy(req.body.imageID)
        cloudinary.uploader.destroy(req.body.trailerID, {resource_type: "video"})
        return res.json({ message: "All fields are required" })
    }
    data.likes = []
    data.owner = req.user._id
    data.comments = []

    const [_, error] = await promise(movieService.create(data))
    if(error) {
        res.status(400)
        cloudinary.uploader.destroy(req.body.imageID)
        cloudinary.uploader.destroy(req.body.trailerID, {resource_type: "video"})
        return res.json({ message: error.message })
    }
    res.json(data)
})

module.exports = router