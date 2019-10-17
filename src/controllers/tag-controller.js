const tagService = require("./services/tag-service")
const Tag = require("./models/Tag.js")

module.exports = {
    async addTag(req, res) {
        const name = req.body.name 
        await tagService.save(new Tag (name))//???? 
    },

    async renderAll(req, res) {
        res.render("/alltags" , {tags: await tagService.findAll()})
    }
}