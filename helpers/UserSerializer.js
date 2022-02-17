const { Op } = require("sequelize");
const { User, Friend } = require("../models");

const options = {
  attributes: {
    exclude: ["password", "googleId", "facebookId", "createdAt", "updatedAt"],
  },
};

exports.getUserById = async (userId) => {
  return await User.findByPk(userId, options);
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
