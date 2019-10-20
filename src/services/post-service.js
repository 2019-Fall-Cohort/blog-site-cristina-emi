const Post = require('../models/Post.sequelize')

module.exports = {
    async findAll () {
        await Post.findAll();
    },

    async save (post) {
        await Post.create(post)
    }
}; 