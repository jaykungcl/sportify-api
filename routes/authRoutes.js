const router = require("express").Router();
const authController = require("../controllers/authController");
const { generateToken } = require("../middlewares/authenticator");

// email register and login
router.get("/", (req, res) => {
  return res.status(200).json({ messgae: "auth" });
});
router.post("/register", authController.register, generateToken);
router.post("/login", authController.login, generateToken);

// google login
router.post("/login/google", authController.googleLogin, generateToken);

// facebook login
router.post("/login/google", authController.facebookLogin, generateToken);

module.exports = router;
