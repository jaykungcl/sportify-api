const router = require("express").Router();
const eventController = require("../controllers/eventController");

// authentication related

// user related events
router.get("/:id/events", eventController.getByCreator);
router.get("/:id/participations", eventController.getByParticipator);

module.exports = router;
