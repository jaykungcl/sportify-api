const router = require("express").Router();
const eventController = require("../controllers/eventController");
const friendController = require("../controllers/friendController");

// user related events
router.get("/:id/events", eventController.getByCreator);
router.get("/:id/participations", eventController.getByParticipator);

// friends
router.get("/:id/friends", friendController.getAllFriends);

module.exports = router;
