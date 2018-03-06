const router = require("express").Router();
const superlativeRoutes = require("./superlatives");

router.use("/superlatives", superlativeRoutes);

module.exports = router;
