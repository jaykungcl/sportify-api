const bcrypt = require("bcryptjs");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const util = require("util");
const fs = require("fs");
const cloudinary = require("../config/cloudinary");

// models
const { User } = require("../models/");

// google auth
const { OAuth2Client, auth } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const uploadPromise = util.promisify(cloudinary.uploader.upload);

exports.googleLogin = async (req, res, next) => {
  try {
    const { tokenId: idToken } = req.body;

    // Verify GOOGLE idToken
    const ticket = await client
      .verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      })
      .catch((err) => {
        next(err);
      });

    const {
      email_verified,
      given_name,
      family_name,
      email,
      picture,
      sub: googleId,
    } = ticket.payload;

    // Check if the email is not verified
    if (!email_verified) {
      return res
        .status(400)
        .json({ message: "Your Google account is not verified" });
    }

    const defaultUser = {
      firstName: given_name,
      lastName: family_name,
      email,
      imgUrl: picture,
      googleId,
    };

    // If the email is verified create or check
    const user = await User.findOrCreate({
      where: { googleId, email },
      defaults: defaultUser,
    });

    req.user = user[0];
    next();
  } catch (err) {
    next(err);
  }
};

exports.facebookLogin = async (req, res, next) => {
  try {
    const { accessToken } = req.body;

    const response = await axios
      .get(
        `https://graph.facebook.com/v12.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.FB_CLIENT_ID}&client_secret=${process.env.FB_CLIENT_SECRET}&fb_exchange_token=${accessToken}`
      )
      .catch((err) => {
        res.status(400).json({ message: "user not found" });
      });

    // If user is not found
    if (response.status !== 200) {
      return res
        .status(400)
        .json({ message: "user not found or error has occurred" });
    }

    //Get user info from access token
    const {
      data: {
        id: facebookId,
        first_name: firstName,
        last_name: lastName,
        email,
        picture: {
          data: { url: profileImg },
        },
      },
    } = await axios.get(
      `https://graph.facebook.com/me?fields=id,first_name,last_name,email,picture&access_token=${response.data.access_token}`
    );

    const defaultUser = {
      facebookId,
      firstName,
      lastName,
      email,
      imgUrl: profileImg,
    };

    const user = await User.findOrCreate({
      where: { facebookId, email },
      defaults: defaultUser,
    });

    req.user = user[0];
    next();
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  console.log("auth");
  try {
    const { email, firstName, lastName, password, confirmPassword } = req.body;

    // if (await User.findOne({ where: { username } }))
    //   return res.status(400).json({ message: "This username already exist" });

    if (await User.findOne({ where: { email } }))
      return res
        .status(400)
        .json({ message: "This email has already been registered" });

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Password must be 6 characters or longer." });
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password did not match" });
    }

    const hashed = await bcrypt.hash(password, 10);

    // const uploaded = await uploadFile(fileStr);
    // const imgUrl = uploaded.url;
    // console.log(fileStr, imgUrl);

    let result = {};
    if (req.file) {
      result = await uploadPromise(req.file.path);
      fs.unlinkSync(req.file.path);
    }

    await User.create({
      firstName,
      lastName,
      email,
      password: hashed,
      imgUrl: result.secure_url,
    });

    return res.status(201).json({ message: "User created" });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);

  try {
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password." });

    const payload = {
      id: user.id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 30,
    });

    return res.status(200).json({
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
  }
};
