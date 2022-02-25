const { Event, Activity } = require("../models");
const {
	getAllActive,
	getById,
	getByCreator,
	getByParticipator,
} = require("../helpers/EventSerializer");

const {
	validLocation,
	validTime,
	validLevel,
	validNumPeople,
} = require("../helpers/validator");

const util = require("util");
const fs = require("fs");
const cloudinary = require("../config/cloudinary");
const uploadPromise = util.promisify(cloudinary.uploader.upload);

exports.create = async (req, res, next) => {
	console.log(req.user.id);
	const { title, detail, activityId, lat, lng, start, end, level, maxPeople } =
		req.body;
	try {
		const locationLat = parseFloat(lat);
		const locationLng = parseFloat(lng);
		const timeStart = Date.parse(start);
		const timeEnd = Date.parse(end);
		console.log(locationLat, locationLng);
		console.log(timeStart, timeEnd);
		console.log(activityId);

		if (!validLocation(locationLat, locationLng))
			return res.status(400).json({ message: "Invalid location" });

		if (!validTime(timeStart, timeEnd))
			return res.status(400).json({
				message: "Invalid time input",
			});

		if (!validLevel(level))
			return res.status(400).json({ message: "Invalid level" });

		if (!validNumPeople(maxPeople))
			return res.status(400).json({
				message: "Number of max attendant must be a positive integer",
			});

		// if(await Category)
		let result = {};
		if (req.file) {
			result = await uploadPromise(req.file.path);
			fs.unlinkSync(req.file.path);
		}

		const event = await Event.create({
			title,
			detail,
			activityId,
			locationLat,
			locationLng,
			timeStart,
			timeEnd,
			level,
			maxPeople,
			imgUrl: result.secure_url,
			userId: req.user.id,
		});

		return res.status(201).json({ event });
	} catch (err) {
		next(err);
	}
};

exports.getAllActive = async (req, res, next) => {
	try {
		const events = await getAllActive();
		return res.status(200).json({ events });
	} catch (err) {
		next(err);
	}
};

exports.getById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const event = await getById(id);
		return res.status(200).json({ event });
	} catch (err) {
		next(err);
	}
};

exports.getByCreator = async (req, res, next) => {
	const { id: userId } = req.params;
	try {
		const events = await getByCreator(userId);
		return res.status(200).json({ events });
	} catch (err) {
		next(err);
	}
};

exports.getByParticipator = async (req, res, next) => {
	const { id: userId } = req.params;
	try {
		const events = await getByParticipator(userId);
		return res.status(200).json({ events });
	} catch (err) {
		next(err);
	}
};

exports.getActivity = async (req, res, next) => {
	try {
		const allActivity = await Activity.findAll();
		return res.status(200).json({ allActivity });
	} catch (error) {}
};

exports.delete = async (req, res, next) => {
	const { id } = req.params;
	try {
		const event = await getById(id);
		if (!event) return res.status(400).json({ message: "Event not found" });

		await event.destroy();
		return res.status(200).json({ messgae: "Event was deleted" });
	} catch (err) {
		next(err);
	}
};

exports.update = async (req, res, next) => {
	const { id } = req.params;
	const { title, description, locationLat, locationLng, timeStart, timeEnd } =
		req.body;
	try {
		const event = await getById(id);
		if (!event) return res.status(400).json({ message: "Event not found" });

		if (!validLocation(locationLat, locationLng))
			return res.status(400).json({ message: "Invalid location" });

		if (!validTime(timeStart, timeEnd))
			return res.status(400).json({
				message: "Invalid time input",
			});

		await event.update({
			title,
			description,
			locationLat,
			locationLng,
			timeStart,
			timeEnd,
		});
		event.save();

		return res.status(201).json({ event });
	} catch (err) {
		next(err);
	}
};
