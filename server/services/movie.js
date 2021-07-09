const Movie = require("../models/Movie")  
const User = require("../models/User")


function getAll() {
    return Movie.find({})
}
function getById(id) {
    return Movie.findById(id).populate({
        path : 'comments',
        populate : {
          path : 'owner'
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
module.exports = {
    getAll,
    getById,
    create,
    getNext,
}