const router = require("express").Router();
const eventController = require("../controllers/eventController");
const participationController = require("../controllers/participationController");
const { authenticate } = require("../middlewares/authenticator");
const upload = require("../middlewares/upload");

router.get("/", eventController.getAllActive);
router.post("/", authenticate, upload.single("event"), eventController.create);
router.get("/:id", eventController.getById);
router.delete("/:id", authenticate, eventController.delete);

// participations
router.post(
  "/:eventId/participation",
  authenticate,
  participationController.join
);
router.delete(
  "/:eventId/participation/:id",
  authenticate,
  participationController.leave
);

module.exports = router;
