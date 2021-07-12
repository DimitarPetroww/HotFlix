const express = require("express")
const router = express.Router()
const promise = require("../util/promise")
const movieService = require("../services/movie")
const { isAuthenticated } = require("../middlewares/guards")
const cloudinary = require("cloudinary").v2
const commentService = require("../services/comment")

router.get("/", isAuthenticated(), async (req, res) => {
    const request = req.query.offset ? movieService.getNext(Number(req.query.offset)) : movieService.getAll()
    const [movies, error] = await promise(request)
    if (error) {
        res.status(400)
        return res.json({ message: error.message })
    }
    res.json(movies)
})
router.get("/:id", isAuthenticated(), async (req, res) => {
    const [movie, error] = await promise(movieService.getById(req.params.id))
    if (error) {
        res.status(400)
        return res.json({ message: error.message })
    }
    res.json(movie)
})
router.post("/", isAuthenticated(), async (req, res) => {
    const data = {
        name: req.body.name,
        description: req.body.description,
        trailerUrl: req.body.trailerUrl,
        imageUrl: req.body.imageUrl,
        genre: req.body.genre,
        author: req.body.author,
        imageID: req.body.imageID,
        trailerID: req.body.trailerID
    }
    if (Object.values(data).some(x => x == "")) {
        res.status(400)
        cloudinary.uploader.destroy(req.body.imageID)
        cloudinary.uploader.destroy(req.body.trailerID, { resource_type: "video" })
        return res.json({ message: "All fields are required" })
    }
    data.likes = []
    data.owner = req.user._id
    data.comments = []
    data.user = req.user

    const [_, error] = await promise(movieService.create(data))
    if (error) {
        res.status(400)
        cloudinary.uploader.destroy(req.body.imageID)
        cloudinary.uploader.destroy(req.body.trailerID, { resource_type: "video" })
        return res.json({ message: error.message })
    }
    res.json(data)
})
router.delete("/:id", async (req, res) => {
    const [{ trailerID, imageID }, error] = await promise(movieService.deleteMovie(req.params.id))
    if (error) {
        res.status(400)
        return res.json({ message: error.message })
    }
    cloudinary.uploader.destroy(imageID)
    cloudinary.uploader.destroy(trailerID, { resource_type: "video" })


})
router.patch("/:id", async (req, res) => {
    const data = {
        name: req.body.name,
        description: req.body.description,
        genre: req.body.genre,
        author: req.body.author,
    }
    if (Object.values(data).some(x => x == "")) {
        res.status(400)
        return res.json({ message: "All fields are required" })
    }

    const [movie, error] = await promise(movieService.editMovie(req.params.id, data))
    if (error) {
        res.status(400)
        return res.json({ message: error.message })
    }
    res.json(movie)
})
router.put("/like", isAuthenticated(), async (req, res) => {
    const [movie, error] = await promise(movieService.likeMovie(req.body.movieId, req.user._id))
    if (error) {
        res.status(400)
        return res.json({ message: error.message })
    }
    res.json(movie)
})
router.post("/comment", isAuthenticated(), async (req, res) => {
    const data = {
        message: req.body.message,
        movie: req.body.movie,
    }
    if (Object.values(data).some(x => x == "")) {
        res.status(400)
        return res.json({ message: "All fields are required" })
    }
    data.likes = []
    data.user = req.user
    const [movie, error] = await promise(commentService.comment(data))
    if (error) {
        res.status(400)
        return res.json({ message: error.message })
    }
    res.json(movie)
})
router.delete("/comment/:id", isAuthenticated(), async (req, res) => {
    const id = req.params.id
    const [comments, error] = await promise(commentService.deleteComment(id))
    if (error) {
        res.status(400)
        return res.json({ message: error.message })
    }
    res.json(comments)
})
router.put("/comment/like", isAuthenticated(), async (req, res) => {
    const [comments, error] = await promise(commentService.likeComment(req.body.commentId, req.body.movieId, req.user))
    if (error) {
        res.status(400)
        return res.json({ message: error.message })
    }
    res.json(comments)
})
router.put("/comment/dislike", isAuthenticated(), async (req, res) => {
    const [comments, error] = await promise(commentService.dislikeComment(req.body.commentId, req.body.movieId, req.user))
    if (error) {
        res.status(400)
        return res.json({ message: error.message })
    }
    res.json(comments)
})

module.exports = router