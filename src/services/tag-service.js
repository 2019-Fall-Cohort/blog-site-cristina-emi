const Tag = require('../models/Tag.sequelize')

module.exports = {
    async findAll () {
        await Tag.findAll();
    },
    
    async save (tag) {
        await Tag.create(tag)
    }
};