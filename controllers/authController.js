const bcrypt = require("bcryptjs");
const axios = require("axios");

// models
const { User } = require("../models/");

// google auth
const { OAuth2Client, auth } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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
