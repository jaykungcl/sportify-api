const express = require("express");
const app = express();
const cors = require("cors");
// const passport = require("passport");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const friendRoutes = require("./routes/friendRoutes");
const activityRoute = require("./routes/activityRoutes");
const { allowedNodeEnvironmentFlags } = require("process");

// config
// require("./config/passport")(passport);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("public/images"));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/events", eventRoutes);
app.use("/friends", friendRoutes);
app.use("/activities", activityRoute);

app.use((req, res) => {
	res.status(404).json({ message: "Invalid API endpoint" });
});

app.use((err, req, res, next) => {
	console.log(err);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("listening on port : " + PORT));
