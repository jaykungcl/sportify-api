const router = require("express").Router();
const eventController = require("../controllers/eventController");
const friendController = require("../controllers/friendController");
const userController = require("../controllers/userController");

// user related events
router.get("/:id/events", eventController.getByCreator);
router.get("/:id/participations", eventController.getByParticipator);

// user data
router.get("/:id", userController.getProfile);

// friends
router.get("/:id/friends", friendController.getAllFriends);

module.exports = router;
