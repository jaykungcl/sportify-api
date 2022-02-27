const { getUserById, updateBioById } = require("../helpers/UserSerializer");

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
