const Author = require('../models/Author.sequelize')

module.exports = {
    findAll (callback) {
        Author.findAll().then(callback);
    },   
    save (author, callback) {
        Author.create(author).then(callback)
    }
}; 

