const router = require("express").Router();
const authController = require("../controllers/authController");
const upload = require("../middlewares/upload");
const { generateToken, authenticate } = require("../middlewares/authenticator");

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
router.post("/login/facebook", authController.facebookLogin, generateToken);

module.exports = router;
