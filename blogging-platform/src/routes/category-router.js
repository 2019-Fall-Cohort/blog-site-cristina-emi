const express = ('express');
const router = express.Router();

const CategoryController = require("../controllers/category-controller");

/* GET all categories */
router.get('/allcategories/', CategoryController.renderAll);

/* POST new category */
router.post('/allcategories/new', CategoryController.addCategory);

module.exports = router;