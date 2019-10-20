const Category = require('../models/Category.sequelize')

module.exports = {
    async findAll () {
        await Category.findAll();
    },

    async save (category) {
        await Category.create(category)
    }
}; 