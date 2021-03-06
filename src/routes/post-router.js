const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post-controller');

/* GET all posts */
router.get('/allposts/', PostController.renderAll);

//GET single post
router.get('/allposts/:id', PostController.renderSingle);

/*POST new post*/
router.post('/allposts/new', PostController.addPost);

module.exports = router;