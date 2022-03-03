const { getUserById, updateBioById } = require("../helpers/UserSerializer");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const util = require("util");
const { User } = require("../models");

const uploadPromise = util.promisify(cloudinary.uploader.upload);

exports.getProfile = async (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const user = await getUserById(userId);
    return res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};

exports.updateBio = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  if (!body.bio) res.send({ status: false, msg: "Params bio is not valid." });

  try {
    const user = await updateBioById(id, body.bio);
    if (user[0] < 1)
      return res.send({ status: false, msg: "Update bio fail." });

    return res.send({ status: true, msg: "Update bio success." });
  } catch (err) {
    //     next(err);
    return res.status(400).send("Somethin wrong");
  }
};

exports.updateProfilePic = async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findOne({ where: { id } });
  if (!user) {
    res.status(400).json({ message: "user not found" });
  }

  if (req.file) {
    const { path } = req.file;
    if (user.imgUrl) {
      const splited = user.imgUrl.split("/");
      cloudinary.uploader.destroy(splited[splited.length - 1].split(".")[0]);
    }

    const result = await uploadPromise(path);
    fs.unlinkSync(path);

    user.update({ imgUrl: result.secure_url });

    res.status(200).json({ user });
  }
};
