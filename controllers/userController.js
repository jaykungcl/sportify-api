const { getUserById } = require("../helpers/UserSerializer");

exports.getProfile = async (req, res, next) => {
	const { id: userId } = req.params;
	try {
		const user = await getUserById(userId);
		return res.status(200).json({ user });
	} catch (err) {
		next(err);
	}
};
