const authorService = require("./services/author-service")
const authorDomainObject = require("./models/Author.js")

module.exports = {
    async addAuthor(req, res) {
        const name = req.body.name 
        await authorService.save(new authorDomainObject (name))//???? 
    },

    async renderAll(req, res) {
        res.render("/allauthors" , {authors: await authorService.findAll()})
    }
}

module.exports = controller;