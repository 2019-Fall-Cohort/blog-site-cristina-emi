const genreService = require("./services/author-service")
const Genre = require("./models/Genre.js")

module.exports = {
    async addGenre(req, res) {
        const name = req.body.name
        await genreService.save(new Genre (name))
    },

    async renderAll(req, res) {
        res.render("/allgenres", {genres: await genreService.findAll()})
    }
}