const categoryService = require("./services/category-service")
const categoryDomainObject = require("./models/category.js")

module.exports = {
    async addCategory(req, res) {
        const name = req.body.name
        await categoryService.save(new categoryDomainObject (name))
    },

    async renderAll(req, res) {
        res.render("/allcategories", {categories: await categoryService.findAll()})
    }
}