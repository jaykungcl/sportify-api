const GoogleStartegy = require("passport-google-oauth20").Strategy;
const { User } = require("../models");

module.exports = (passport) => {
  passport.use(
    new GoogleStartegy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    }),
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  );
};
