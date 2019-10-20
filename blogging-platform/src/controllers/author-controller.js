const authorService = require("./services/author-service")
const authorDomainObject = require("./models/Author.js.js")

module.exports = {
    async addAuthor(req, res) {
        const name = req.body.name;

        const newAuthor = new authorDomainObject(name)
        await authorService.save(newAuthor)//????
        res.redirect("/allauthors") 
    },

    async renderAll(req, res) {
        res.render("/allauthors" , {authors: await authorService.findAll()})
    }
}

module.exports = controller;