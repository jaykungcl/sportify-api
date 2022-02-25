const { Activity } = require("../models");

exports.getAllActivity = async (req, res, next) => {
	try {
		const activities = await Activity.findAll();
		return res.status(200).json({ activities });
	} catch (err) {
		console.log(err);
	}
};
