const Category = require('../models/Category.sequelize')

module.exports = {
    findAll (callback) {
        Category.findAll().then(callback);
    },

    save (category, callback) {
        Category.create(category).then(callback)
    }
}; 