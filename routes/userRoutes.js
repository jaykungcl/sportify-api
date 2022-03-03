const router = require("express").Router();
const eventController = require("../controllers/eventController");
const friendController = require("../controllers/friendController");
const userController = require("../controllers/userController");
const authenticate = require("../middlewares/authenticator");
const upload = require("../middlewares/upload");

// user related events
router.get("/:id/events", eventController.getByCreator);
router.get("/:id/participations", eventController.getByParticipator);

// user data
router.get("/:id", userController.getProfile);

router.put("/bio/:id", userController.updateBio);
router.patch(
  "/profile/:id",
  upload.single("profile"),
  userController.updateProfilePic
);

// friends
router.get("/:id/friends", friendController.getAllFriends);

module.exports = router;
