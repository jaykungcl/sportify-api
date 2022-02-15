require("dotenv").config();
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { User } = require("../models");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY || "password123456",
};
console.log(options.jwtFromRequest);

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    try {
      console.log(payload);
      const user = await User.findOne({ where: { id: payload.id } });
      console.log(user);
      if (!user) {
        return done(null, false);
      }
      done(null, user);
    } catch (err) {
      console.log("error");
      done(err, false);
    }
  })
);

module.exports = passport.authenticate("jwt", { session: false });
