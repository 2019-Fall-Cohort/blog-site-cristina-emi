const Tag = require('../models/Tag.sequelize')

module.exports = {
    findAll (callback) {
        Tag.findAll().then(callback);
    },
    
    save (tag, callback) {
        Tag.create(tag).then(callback)
    }
};