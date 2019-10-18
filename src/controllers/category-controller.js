const categoryService = require("./services/category-service")
const Category = require("./models/Category.js")

module.exports = {
    async addCategory(req, res) {
        const name = req.body.name
        await categoryService.save(new Category (name))
    },

    async renderAll(req, res) {
        res.render("/allcategories", {categories: await categoryService.findAll()})
    }
}