module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      locationLat: {
        type: DataTypes.FLOAT(10, 10),
        allowNull: false,
      },
      locationLng: {
        type: DataTypes.FLOAT(10, 10),
        allowNull: false,
      },
      timeStart: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      timeEnd: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foriegnKey: {
        name: "userId",
        allowNull: false,
      },
    });
    Event.belongsTo(models.Activity, {
      foriegnKey: "activityId",
      allowNull: false,
    });
  };
};
