"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const hashedPassword = await bcrypt.hash("1234", 10);
    return queryInterface.bulkInsert("activities", [
      {
        id: "1",
        name: "Basketball Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "2",
        name: "Lasergame Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "3",
        name: "Football Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "",
        name: "Rockclimbing Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "1",
        name: "Tennis Party",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
};
