const { Participation } = require("../models");
const { getById } = require("../helpers/EventSerializer");

exports.join = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const event = getById(eventId);
    if (event.userId === req.user.id)
      return res
        .status(400)
        .json({ message: "Host cannot join their own events" });

    if (
      await Participation.findOne({ where: { userId: req.user.id, eventId } })
    )
      return res.status(400).json({ message: "Duplicate user on same event" });

    await Participation.create({
      userId: req.user.id,
      eventId,
    });
  } catch (err) {
    next(err);
  }
};

exports.leave = async (req, res, next) => {
  const { id } = req.params;
  try {
    const participation = await Participation.findOne({
      where: { id },
    });
    if (!participation)
      return res.status(400).json({ message: "User not in guest list" });

    await participation.destroy();

    return res
      .status(200)
      .json({ message: "Remove participation succesfully" });
  } catch (err) {
    next(err);
  }
};
