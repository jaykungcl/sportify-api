const express = require("express");
const app = express();
const cors = require("cors");
// const passport = require("passport");

const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const friendRoutes = require("./routes/friendRoutes");

// config
// require("./config/passport")(passport);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(passport.session())

app.use("/users", userRoutes);
app.use("/events", eventRoutes);
app.use("/friendss", friendRoutes);

app.use((err, req, res, next) => {
  console.log(err);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("listening on port : " + PORT));
