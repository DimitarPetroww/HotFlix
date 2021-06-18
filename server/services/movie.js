const Movie = require("../models/Movie")  

function getAll() {
    return Movie.find({})
}
function getById(id) {
    return Movie.findById(id)
}
module.exports = {
    getAll,
    getById
}