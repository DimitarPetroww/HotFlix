const jwt = require("jsonwebtoken")
const config = require("../config/config")[process.env.NODE_ENV || 'development']

module.exports = () =>  (req, res, next) => {
    const token = req.cookies[config.COOKIE_NAME];
    try {
        const user = jwt.verify(token, config.TOKEN_SECRET);
        req.user = user
    } catch (error) {
        res.clearCookie(config.COOKIE_NAME);
    }

    next()
}
