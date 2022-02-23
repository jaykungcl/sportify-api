const router = require("express").Router();
const authController = require("../controllers/authController");
const { generateToken } = require("../middlewares/authenticator");
const upload = require("../middlewares/upload");

// email register and login
router.post("/", authenticate, generateToken);
router.post(
  "/register",
  upload.single("profile"),
  authController.register,
  generateToken
);
router.post("/login", authController.login, generateToken);

// google login
router.post("/login/google", authController.googleLogin, generateToken);

// facebook login
router.post("/login/google", authController.facebookLogin, generateToken);

module.exports = router;
