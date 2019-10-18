const Sequelize = require('sequelize')

const sequelize = require('../utils/database')

const Post = sequelize.define('post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  publishDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tag: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = Post