const cloudinary = require("cloudinary").v2

function isAuth() {
    return async (req, res, next) => {
        if (req.user !== undefined) {
            next()
        } else {
            cloudinary.uploader.destroy(req.body.imageID)
            cloudinary.uploader.destroy(req.body.trailerID, {resource_type: "video"})
            res.status(401)
            res.json({ message: "Unauthorized" })
        }
    }
}
module.exports = {
    isAuth
}