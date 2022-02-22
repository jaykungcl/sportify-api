"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const hashedPassword = await bcrypt.hash("1234", 10);
    return queryInterface.bulkInsert("activities", [
      {
        // id: "1",
        name: "Basketball Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: "2",
        name: "Lasergame Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: "3",
        name: "Football Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: "4",
        name: "Rockclimbing Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: "5",
        name: "Tennis Party",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("activities", null, {});
  },
};
