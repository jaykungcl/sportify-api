"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      google_id: {
        type: Sequelize.STRING,
        unique: true,
      },
      facebook_id: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allownull: false,
      },
      img_url: {
        type: Sequelize.STRING,
      },
      bio: Sequelize.TEXT,
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
