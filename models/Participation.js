module.exports = (sequelize, DatTypes) => {
  const Participation = sequelize.define(
    "Participation",
    {},
    {
      underscored: true,
    }
  );
};
