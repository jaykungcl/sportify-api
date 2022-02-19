const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { getUserById } = require("../helpers/UserSerializer");

exports.authenticate = async (req, res, next) => {
  // Extract token from Header
  const auth = req.header("authorization");

  if (typeof auth !== "string" || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const bearerToken = auth.split(" ")[1];

  if (!bearerToken) {
    return res.status(401).json({ message: "Unauthorized or no token" });
  }

  try {
    // Extract payload from token if token is verified
    const payload = jwt.verify(bearerToken, process.env.JWT_SECRET_KEY);
    console.log(payload.id);
    const user = await getUserById(payload.id);

    if (!user) return res.status(401).json({ message: "Invalid token" });

    // Set user info in request header
    const formattedResult = JSON.stringify(user);
    req.user = JSON.parse(formattedResult);
    console.log("attach req.user");
    console.log(user);
  } catch (err) {
    next(err);
  }
  next();
};

exports.generateToken = async (req, res, next) => {
  if (req.user) {
    const { id, email, firstName, lastName, imgUrl } = req.user;

    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    return res.status(200).json({
      token,
      user: { id, firstName, lastName, email, imgUrl },
    });
  }
  res.status(401).send("You must login first");
};
