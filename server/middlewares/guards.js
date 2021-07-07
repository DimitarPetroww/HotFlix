function isAuth() {
    return (req, res, next) => {
        if (req.user !== undefined) {
            next()
        } else {
            res.status(401)
            res.json({message: "Unauthorized"})
        }
    }
}
module.exports = {
    isAuth
}