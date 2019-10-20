const categoryService = require("./services/category-service")
const categoryDomainObject = require("./models/category.js")

module.exports = {
    async addCategory(req, res) {
        const name = req.body.name

        const newCategory = new categoryDomainObject(name)
        await categoryService.save(newCategory)
        res.redirect("/allcategories")
    },

    async renderAll(req, res) {
        res.render("/allcategories", {categories: await categoryService.findAll()})
    }
}

module.exports = controller;