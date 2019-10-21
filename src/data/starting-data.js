const Author = require('../models/Author.sequelize');
const Category = require('../models/Category.sequelize');
const Post = require('../models/Post.sequelize');
const Tag = require('../models/Tag.sequelize');

const startingAuthors =
const startingCategories = [
    {categoryTitle : "Tattoos"},
    {categoryTitle : "Hair"},
    {categoryTitle : "Clothes"}
    ]

const StartingTags = [
    {tagTitle : "Funny"},
    {tagTitle : "Sad"},
    {tagTitle : "Beautiful"},
    {tagTitle : "Ugly"}
]

const generateStartingData = () => {
    Category.bulkCreate(StartingCategories, {
      fields: ["categoryTitle"],
      updateOnDuplicate: ["categoryTitle"]
    })
    Tag.bulkCreate(StartingTags, {
      fields: ["tagTitle"],
      updateOnDuplicate: ["tagTitle"]
    })
};

module.exports = generateStartingData;