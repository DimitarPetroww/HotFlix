const Movie = require("../models/Movie")  
const Comment = require("../models/Comment")  
const movieService = require("./movie")

async function comment(data) {
    const comment = new Comment({message: data.message, movie: data.movie, likes: data.likes, owner: data.user})
    const existingComment = await comment.save()
    const movie = await movieService.getById(data.movie)
    movie.comments.push(existingComment)
    await movie.save()
   
    return getComments(movie._id)
}
async function getComments(movieId) {
    return Comment.find({movie: movieId}).populate("owner")
}
async function deleteComment(id) {
    const movie = await Movie.findOne({comments: id}).populate({
        path : 'comments',
        populate : {
          path : 'owner'
        }
    })
    if(!movie) {
        throw new Error("No movie with that comment")
    }
    const index = movie.comments.findIndex(x=> x == id)
    movie.comments.splice(index, 1)
    const updated = await movie.save()
    await Comment.deleteOne({_id: id})

    return getComments(updated._id)
}
async function likeComment(commentId, movieId, user) {
    const comment = await Comment.findById(commentId)
    comment.likes.push(user._id)
    await comment.save()

    return getComments(movieId)
}
async function dislikeComment(commentId, movieId, user) {
    const comment = await Comment.findById(commentId)
    const index = comment.likes.findIndex(x=> x == user._id)
    comment.likes.splice(index, 1)
    await comment.save()

    return getComments(movieId)
}
module.exports = {
    comment,
    deleteComment,
    likeComment,
    dislikeComment
}
