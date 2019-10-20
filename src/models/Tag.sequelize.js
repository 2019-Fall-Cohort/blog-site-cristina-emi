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

Post.belongsToMany(Tag, { through: 'tag_post' })
Tag.belongsToMany(Post, { through: 'tag_post' })

module.exports = Tag