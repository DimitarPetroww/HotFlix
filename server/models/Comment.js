const { Schema, model} = require("mongoose")

const schema = new Schema({
    message: { type: String, required: true},
    movie: {type: Schema.Types.ObjectId, ref: "Movie"},
    likes: [{type: Schema.Types.ObjectId, ref: "User"}]
})

module.exports = model("Comment", schema)