const Movie = require("../models/Movie")  

function getAll() {
    return Movie.find({})
}
function getById(id) {
    return Movie.findById(id)
}
function create(data) {
    const existing = new Movie(data)

    return existing.save()
}
module.exports = {
    getAll,
    getById,
    create
}