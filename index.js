const config = require("./server/config/config")
const path = require("path")

const allowed = [
    ".js",
    ".css",
    ".png",
    ".jpg"
];
async function init() {
    const app = require("express")();
    await require("./server/config/db")(app)

    require("./server/config/express")(app);
    require("./server/router")(app);

    app.get("*", (req, res) => {
        if (allowed.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
            res.sendFile(path.resolve(`client/dist/front-end/${req.url}`));
        } else {
            res.sendFile(path.join(__dirname, "client/dist/front-end/index.html"));
        }
    });

    app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}`));
}
init()