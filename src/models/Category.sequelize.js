const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Post = require('./Post.sequelize')

const Category = sequelize.define('category', {
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

Post.belongsToMany(Category, { through: 'category_post' })
Category.belongsToMany(Post, { through: 'category_post' })

module.exports = Category