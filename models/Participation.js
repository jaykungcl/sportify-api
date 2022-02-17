module.exports = (sequelize, DatTypes) => {
  const Participation = sequelize.define(
    "Participation",
    {},
    {
      underscored: true,
    }
  );

  Participation.associate = (models) => {
    Participation.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    Participation.belongsTo(models.Event, {
      foreignKey: {
        name: "eventId",
        allowNull: false,
      },
    });
  };

  return Participation;
};
