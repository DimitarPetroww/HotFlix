const config = {
    development: {
        PORT: process.env.PORT || 3000,
        origin: ['http://localhost:5555', 'http://localhost:4200'],
        DB_CONNECTION : 'mongodb://localhost:27017/HotFlix',
        SALT_ROUNDS : 10,
        COOKIE_NAME: "SESSION_DATA",
        TOKEN_SECRET : 'very_secret',
    },
    production: {
        PORT: process.env.PORT || 80,
        origin: ['https://hot-flix.herokuapp.com/'],
        DB_CONNECTION : 'mongodb+srv://Qnko:zsexdr123@hotflix.3epgb.mongodb.net/HotFlix?retryWrites=true&w=majority',
        SALT_ROUNDS : 10,
        COOKIE_NAME: "SESSION_DATA",
        TOKEN_SECRET : 'very_secret',
    }
};
module.exports = config[process.env.NODE_ENV.trim()];