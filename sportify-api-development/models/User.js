module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      facebookId: {
        type: DataTypes.STRING,
        unique: true,
      },
      googleId: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgUrl: DataTypes.STRING,
      bio: DataTypes.TEXT,
    },
    {
      underscored: true,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Event, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    User.hasMany(models.Participation, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    User.hasMany(models.Friend, {
      as: "RequestFrom",
      foreignKey: {
        name: "requestFromId",
        allowNull: false,
      },
      onDelete: "CASCADE",
    });
    User.hasMany(models.Friend, {
      as: "RequestTo",
      foreignKey: {
        name: "requestToId",
        allowNull: false,
      },
      onDelete: "CASCADE",
    });
  };

  return User;
};
