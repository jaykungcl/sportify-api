const router = require("express").Router();
const authController = require("../controllers/authController");
const { generateToken } = require("../middlewares/authenticator");

// email register and login
router.post("/register", authController.register);
router.post("/login", authController.login);

// google login
router.post("/login/google", authController.googleLogin, generateToken);

// facebook login
router.post("/login/facebook", authController.facebookLogin, generateToken);

module.exports = router;
