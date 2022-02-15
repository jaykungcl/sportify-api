const router = require("express").Router();
const eventController = require("../controllers/eventController");
const participationController = require("../controllers/participationController");

router.get("/", eventController.getAllActive);
router.post("/", eventController.create);
router.get("/:id", eventController.getById);
router.delete("/:id", eventController.delete);

// participations
router.post("/:id/join", participationController.join);
router.delete("/:id/leave", participationController.leave);

module.exports = router;
