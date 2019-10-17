const express = ('express');
const router = express.Router();

const GenreController = require("../controllers/genre-controller");

/* GET all genres */
router.get('/allgenres/', GenreController.renderAll);

/* POST new genre */
router.post('/allgenres/new', GenreController.addGenre);

module.exports = router;
