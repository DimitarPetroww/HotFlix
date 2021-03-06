const Movie = require("../models/Movie")
const User = require("../models/User")


function getAll() {
    return Movie.find({})
}
function getById(id) {
    return Movie.findById(id).populate({
        path: 'comments',
        populate: {
            path: 'owner'
        }
    })
}
function getNext(offset) {
    return Movie.find({}).skip(offset).limit(4)
}
async function create(data) {
    const existing = new Movie(data)
    const user = await User.findById(data.user._id)
    const movie = await existing.save()

    user.ownedMovies.push(movie)
    await user.save()

    return movie
}
async function deleteMovie(movieId) {
    const movie = await Movie.findById(movieId)
    const user = await User.findById(movie.owner)

    const index = user.ownedMovies.findIndex(x => x == movieId)
    user.ownedMovies.splice(index, 1)

    await Movie.deleteOne({ _id: movieId })


    return { trailerID: movie.trailerID, imageID: movie.imageID }
}
async function editMovie(movieId, data) {
    const movie = await Movie.findById(movieId)

    movie.author = data.author
    movie.description = data.description
    movie.name = data.name
    movie.genre = data.genre

    return movie.save()
}
async function likeMovie(movieId, userId) {
    const movie = await getById(movieId)
    const user = await User.findById(userId)
    user.likedMovies.push(movieId)
    movie.likes.push(userId)
    await movie.save()
    await user.save()
    return movie
}
module.exports = {
    getAll,
    getById,
    create,
    getNext,
    likeMovie,
    editMovie,
    deleteMovie
}