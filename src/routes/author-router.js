const express = require('express');
const router = express.Router();

const AuthorController = require('..controllers/author-controller');

/* GET all authors */
router.get('/allauthors/', AuthorController.renderAll); 

//  POST single author //
router.post ('/allauthors/new', AuthorController.addAuthor);

module.exports = router;