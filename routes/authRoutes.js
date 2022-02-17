const router = require("express").Router();
const authController = require("../controllers/authController");
const { generateToken } = require("../middlewares/authenticator");

// email register and login

// google login
router.post("/login/google", authController.googleLogin, generateToken);

// facebook login
router.post("/login/google", authController.facebookLogin, generateToken);

module.exports = router;
