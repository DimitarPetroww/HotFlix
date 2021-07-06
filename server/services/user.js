const User = require("../models/User")

async function createUser({ email, username, hashedPassword }) {
    if(await findUserByEmail(email)) {
        throw new Error("Email is already taken")
    }
    const existing = new User({ email, username, hashedPassword, ownedMovies: [], likedMovies: [] })

    return existing.save()
}
async function findUserByEmail(email) {
    const existing = await User.find({ email })

    return existing
}
module.exports = {
    createUser
}