const router = require("express").Router();
const superlativesController = require("../../controllers/superlativesController");

// Matches with "/api/superlatives"
router.route("/")
  .get(superlativesController.findAll)
  .post(superlativesController.create);

// Matches with "/api/superlatives/:id"
router
  .route("/:id")
  .get(superlativesController.findById)
  .put(superlativesController.update)
  .delete(superlativesController.remove);

module.exports = router;
