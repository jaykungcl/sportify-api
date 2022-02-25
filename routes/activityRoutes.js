const router = require("express").Router();
const activityController = require("../controllers/activityController");

router.get("/", activityController.getAllActivity);

module.exports = router;
