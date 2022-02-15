const {
  getAllActive,
  getById,
  getByCreator,
  getByParticipator,
} = require("../helpers/serializer");

const { validLocation, validTime } = require("../helpers/validator");

exports.create = (req, res, next) => {
  const { title, description, locationLat, locationLng, timeStart, timeEnd } =
    req.body;
  try {
    if (!validLocation(locationLat, locationLng))
      return res.status(400).json({ message: "Invalid location" });

    if (!validTime(timeStart, timeEnd))
      return res.status(400).json({
        message: "Invalid time input",
      });

    const event = await Event.create({
      title,
      description,
      locationLat,
      locationLng,
      timeStart,
      timeEnd,
      userId: req.user.id,
    });

    return res.status(201).json({ event });
  } catch (err) {
    next(err);
  }
};

exports.getAllActive = (req, res, next) => {
  try {
    const events = getAllActive();
    return res.status(200).json({ events });
  } catch (err) {
    next(err);
  }
};

exports.getById = (req, res, next) => {
  const { id } = req.params;
  try {
    const events = getById(id);
    return res.status(200).json({ events });
  } catch (err) {
    next(err);
  }
};

exports.getByCreator = (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const events = getByCreator(userId);
    return res.status(200).json({ events });
  } catch (err) {
    next(err);
  }
};

exports.getByParticipator = (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const events = getByParticipator(userId);
    return res.status(200).json({ events });
  } catch (err) {
    next(err);
  }
};

exports.delete = (req, res, next) => {
  const { id } = req.params;
  try {
    const event = getById(id);
    if (!event) return res.status(400).json({ message: "Event not found" });

    await event.destroy();
    return res.status(200).json({ messgae: "Event was deleted" });
  } catch (err) {
    next(err);
  }
};

exports.update = (req, res, next) => {
  const { id } = req.params;
  const { title, description, locationLat, locationLng, timeStart, timeEnd } =
    req.body;
  try {
    const event = getById(id);
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