const router = require("express").Router();
const friendController = require("../controllers/friendController");
const { authenticate } = require("../middlewares/authenticator");

// get friends with requested status
router.get("/requested", authenticate, friendController.getPendingRequests);
router.get("/unanswered", authenticate, friendController.getUnansweredRequests);

// create/modify friend status
router.post("/", authenticate, friendController.sendRequest);
router.patch("/:id", authenticate, friendController.acceptRequest);
router.delete("/:id", authenticate, friendController.delete);

module.exports = router;
