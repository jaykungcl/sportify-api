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
      locationLat: {
        type: DataTypes.FLOAT(10),
        allowNull: false,
      },
      locationLng: {
        type: DataTypes.FLOAT(10),
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
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      underscored: true,
    }
  );

  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    Event.belongsTo(models.Activity, {
      foreignKey: { name: "activityId", allowNull: false },
    });
    Event.hasMany(models.Participation, {
      foreignKey: { name: "eventId", allowNull: false },
      onDelete: "cascade",
    });
  };

  return Event;
};
