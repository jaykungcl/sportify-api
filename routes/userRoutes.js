const router = require("express").Router();
const eventController = require("../controllers/eventController");
const friendController = require("../controllers/friendController");
const userController = require("../controllers/userController");
const authenticate = require("../middlewares/authenticator");

// user related events
router.get("/:id/events", eventController.getByCreator);
router.get("/:id/participations", eventController.getByParticipator);

// user data
router.get("/:id", userController.getProfile);

router.put("/bio/:id", userController.updateBio);

// friends
router.get("/:id/friends", friendController.getAllFriends);

module.exports = router;
