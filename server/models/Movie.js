const { Schema, model} = require("mongoose")

const schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    trailerUrl: {type: String, required: true},
    imageUrl: {type: String, required: true},
    imageID: {type: String, required: true},
    trailerID: {type: String, required: true},
    genre: {type: String, required: true},
    author: {type: String, required: true},
    likes: [{type: Schema.Types.ObjectId, ref: "User"}],
    owner: {type: Schema.Types.ObjectId, ref: "User"},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
})

module.exports = model("Movie", schema)