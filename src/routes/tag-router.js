const express = require("express");
const router = express.Router();

const TagController = require("../controllers/tag-controller");

/* GET all tags */
router.get("/alltags/", TagController.renderAll);

//  POST single tag //
router.post("/alltags/new", TagController.addTag);

module.exports = router;