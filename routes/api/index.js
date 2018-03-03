const router = require("express").Router();
const bookRoutes = require("./books");
const superlativeRoutes = require("./superlatives");

router.use("/superlatives", superlativeRoutes);

module.exports = router;
