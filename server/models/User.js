const { Schema, model} = require("mongoose")

const schema = new Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    hashedPassword: {type: String, required: true},
    likedMovies: [{type: Schema.Types.ObjectId, ref: "Movie" }],
    ownedMovies: [{type: Schema.Types.ObjectId, ref: "Movie" }]
})

module.exports = model("User", schema)