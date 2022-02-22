const { Op } = require("sequelize");
const {
  getUnansweredUsers,
  getRequestedUsers,
  getAllFriends,
} = require("../helpers/UserSerializer");
const { Friend, User } = require("../models");

exports.getAllFriends = async (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const users = await getAllFriends(userId);
    return res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};

exports.getPendingRequests = async (req, res, next) => {
  try {
    const users = await getRequestedUsers(req.user.id);
    return res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};

exports.getUnansweredRequests = async (req, res, next) => {
  try {
    const users = await getUnansweredUsers(req.user.id);
    return res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};

exports.sendRequest = async (req, res, next) => {
  const { id: requestToId } = req.body;
  try {
    if (requestToId === req.user.id)
      return res
        .status(400)
        .json({ message: "Cannot send friend request to current user" });

    const friend = await Friend.findOne({
      where: {
        [Op.or]: [
          {
            requestFromId: req.user.id,
            requestToId,
          },
          {
            requestFromId: requestToId,
            requestToId: req.user.id,
          },
        ],
      },
    });
    if (friend)
      return res.status(400).json({ message: "Duplicate friend request" });

    await Friend.create({
      requestFromId: req.user.id,
      requestToId,
    });

    return res.status(201).json({ message: "Friend request sent" });
  } catch (err) {
    next(err);
  }
};

exports.acceptRequest = async (req, res, next) => {
  const { id: requestToId } = req.params;

  try {
    const friend = await Friend.findOne({
      where: {
        requestFromId: req.user.id,
        requestToId,
      },
    });

    if (!friend)
      return res.status(400).json({ message: "Friend request not found." });
    if (friend.status !== "REQUESTED")
      return res
        .status(400)
        .json({ message: "This request has already been accepted." });

    await friend.update({
      status: "ACCEPTED",
    });
    friend.save();

    return res.status(200).json({ message: "Friend request accepted." });
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  const { id: requestToId } = req.params;
  try {
    const friend = await Friend.findOne({
      where: {
        [Op.or]: [
          {
            requestFromId: req.user.id,
            requestToId,
          },
          {
            requestFromId: requestToId,
            requestToId: req.user.id,
          },
        ],
      },
    });
    if (!friend)
      return res.status(400).json({ message: "Cannot find friendship!" });

    await friend.destroy();
    return res.status(204).json({ message: "Friendship destroyed!" });
  } catch (err) {
    next(err);
  }
};
