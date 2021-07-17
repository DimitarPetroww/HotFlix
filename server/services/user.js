const User = require("../models/User")

async function createUser({ email, username, hashedPassword }) {
    if (await findUserByEmail(email)) {
        throw new Error("Email is already taken")
    }
    const existing = new User({ email, username, hashedPassword, ownedMovies: [], likedMovies: [] })

    const data = await existing.save()

    return data
}
async function findUserByEmail(email) {
    const existing = await User.findOne({ email })

    return existing
}
async function getUser(id) {
    return User.findById(id).populate("likedMovies").populate("ownedMovies")
}
module.exports = {
    createUser,
    findUserByEmail,
    getUser
}