const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Post = require('./Post.sequelize')

const Author = sequelize.define('author', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

Post.belongsToMany(Author, { through: 'author_post' })
Author.belongsToMany(Post, { through: 'author_post' })

module.exports = Author;