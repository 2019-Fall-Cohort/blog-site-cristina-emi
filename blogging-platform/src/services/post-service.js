const Post = require('../models/Post.sequelize')

module.exports = {
    findAll (callback) {
        Post.findAll().then(callback);
    },

    save (post, callback) {
        Post.create(post).then(callback)
    }
}; 