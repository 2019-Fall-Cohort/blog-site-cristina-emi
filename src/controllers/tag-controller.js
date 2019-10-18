const tagService = require("./services/tag-service")
const tagDomainObject = require("./models/Tag.js")

module.exports = {
    async addTag(req, res) {
        const name = req.body.name 
        await tagService.save(new tagDomainObject (name))//???? 
    },

    async renderAll(req, res) {
        res.render("/alltags" , {tags: await tagService.findAll()})
    }
}