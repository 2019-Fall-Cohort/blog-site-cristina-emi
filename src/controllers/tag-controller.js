const tagService = require("../services/tag-service")
const tagDomainObject = require("../models/Tag")

module.exports = {
    async addTag(req, res) {
        const name = req.body.name

        const newTag = new tagDomainObject(name)
        await tagService.save(newTag)//????
        res.redirect("/alltags")
    },

    async renderAll(req, res) {
        res.render("/alltags" , {tags: await tagService.findAll()})
    }
}