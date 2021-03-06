const cloudinary = require("cloudinary").v2

function isAuthenticated() {
    return async (req, res, next) => {
        if (req.user !== undefined) {
            next()
        } else {
            if(req.body.imageID && req.body.trailerID) {
                cloudinary.uploader.destroy(req.body.imageID)
                cloudinary.uploader.destroy(req.body.trailerID, {resource_type: "video"})
            }
            res.status(401)
            res.json({ message: "Unauthorized" })
        }
    }
}
function isOwner() {
    return async (req, res, next) => {
        if(req.movie.owner == req.user._id) {
            next()
        }else {
            res.status(401)
            res.json({ message: "No rights to modify" })
        }
    }
}


module.exports = {
    isAuthenticated,
    isOwner
}