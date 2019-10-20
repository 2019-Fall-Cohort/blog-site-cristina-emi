const Author = require('../models/Author.sequelize')

module.exports = {
    async findAll () {
        await Author.findAll();
    },   
    async save (author) {
        await Author.create(author)
    }
}; 

