const router = require("express").Router();
const bookRoutes = require("./books");
const superlativeRoutes = require("./superlatives");

// Book routes
router.use("/books", bookRoutes);
router.use("/superlatives", superlativeRoutes);

module.exports = router;
