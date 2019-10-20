const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Post = require('./Post.sequelize')

const Tag = sequelize.define('tag', {
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

Post.belongsToMany(Tag, { constraints: true, onDelete: 'CASCADE' })
Tag.hasMany(Post)

module.exports = Tag