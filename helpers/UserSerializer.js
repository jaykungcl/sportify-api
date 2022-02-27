const { Op } = require("sequelize");
const { User, Friend, Event, Activity, Participation } = require("../models");

const options = {
  attributes: {
    exclude: ["password", "googleId", "facebookId", "createdAt", "updatedAt"],
  },
  include: [
    {
      model: Event,
      attributes: {
        exclude: ["userId", "activityId"],
      },
      include: [{ model: Activity, attributes: ["id", "name"] }],
    },
    {
      model: Participation,
      attributes: {
        exclude: ["userId", "eventId"],
      },
      include: [
        {
          model: Event,
          attributes: {
            exclude: ["userId", "activityId"],
          },
          include: [{ model: Activity, attributes: ["id", "name"] }],
        },
      ],
    },
  ],
};

exports.getUserById = async (userId) => {
  return await User.findOne({ where: { id: userId }, ...options });
};

exports.updateBioById = async (userId, bio) => {
  return await User.update({ bio: bio }, { where: { id: userId } });
};

exports.getAllFriends = async (userId) => {
  const friends = await Friend.findAll({
    ...options,
    where: {
      [Op.or]: [{ requestToId: userId }, { requestFromId: userId }],
      status: "ACCEPTED",
    },
  });

  const friendIds = friends.map((friend) => {
    if (friend.requestFromId === userId) return friend.requestToId;
    return friend.requestFromId;
  });

  return await User.findAll({ ...options, where: { id: friendIds } });
};

exports.getRequestedUsers = async (userId) => {
  const friends = await Friend.findAll({
    ...options,
    where: {
      requestFromId: userId,
      status: "REQUESTED",
    },
  });

  const friendIds = friends.map((friend) => friend.requestToId);

  return await User.findAll({ ...options, where: { id: friendIds } });
};

exports.getUnansweredUsers = async (userId) => {
  const friends = await Friend.findAll({
    ...options,
    where: {
      requestToId: userId,
      status: "REQUESTED",
    },
  });

  const friendIds = friends.map((friend) => friend.requestFromId);

  return await User.findAll({ where: { id: friendIds } });
};
