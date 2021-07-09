const Movie = require("../models/Movie")  
const Comment = require("../models/Comment")  
const User = require("../models/User")


function getAll() {
    return Movie.find({})
}
function getById(id) {
    return Movie.findById(id)
}
function getNext(offset) {
    return Movie.find({}).skip(offset).limit(4)
}
async function create(data) {
    const existing = new Movie(data)
    const user = await User.findById(user._id)
    const movie = await existing.save()
    user.ownedMovies.push(movie)
    await user.save()

    return movie
}
async function comment(data) {
    const comment = new Comment({message: data.message, movie: data.movie, likes: data.likes, owner: data.user})
    const existingComment = await comment.save()
    const movie = await getById(data.movie)
    movie.comments.push(existingComment)

    const comments = await getCommentsByMovieId(movie)
    return comments
}
async function getCommentsByMovieId(id) {
    return Comment.find({movie: id}).populate("owner").populate("movie")
} 
module.exports = {
    getAll,
    getById,
    create,
    getNext,
    comment
}