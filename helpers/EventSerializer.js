const { Event, Participation, User, Activity } = require("../models");

const options = {
  attributes: {
    exclude: ["userId", "activityId"],
  },
  include: [
    {
      model: User,
      attributes: ["id", "firstName", "lastName", "email", "imgUrl"],
    },
    {
      model: Participation,
      // attributes: ["id", "offer", "createdAt"],
      include: [
        {
          model: User,
          attributes: ["id", "firstName", "lastName", "email", "imgUrl"],
        },
      ],
    },
    {
      model: Activity,
      attributes: ["id", "name"],
    },
  ],
  order: [[Participation, "createdAt", "DESC"]],
};

exports.getAllActive = async () => {
  return await Event.findAll({ where: { active: true }, ...options });
};

exports.getById = async (id) => {
  return await Event.findOne({
    ...options,
    where: { id },
  });
};

exports.getByCreator = async (userId) => {
  return await Event.findAll({
    ...options,
    where: {
      userId,
    },
  });
};

exports.getByParticipator = async (userId) => {
  const participations = await Participation.findAll({ where: { userId } });

  const eventIds = participations.map((item) => item.eventId);
  console.log(eventIds);

  return await Event.findAll({
    ...options,
    where: {
      id: eventIds,
    },
  });
};
