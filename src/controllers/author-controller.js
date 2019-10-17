const authorService = require("./services/author-service")
const Author = require("./models/Author.js")

module.exports = {
    async addAuthor (req, res) {
        const name = req.body.name 
        await authorService.save(new Author (name))//???? 
    },

    async renderAll (req,res) {
        res.render("/allauthors" , {authors: await authorService.findAll()})
    }
}