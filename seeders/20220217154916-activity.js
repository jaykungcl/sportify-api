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
        id: "4",
        name: "Rockclimbing Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "5",
        name: "Tennis Party",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "6",
        name: "Rockclimbing Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "7",
        name: "Tennis Party",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "8",
        name: "Rockclimbing Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "9",
        name: "Tennis Party",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "10",
        name: "Rockclimbing Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "11",
        name: "Tennis Party",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "12",
        name: "Rockclimbing Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "13",
        name: "Tennis Party",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "14",
        name: "Rockclimbing Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "15",
        name: "Tennis Party",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "16",
        name: "Rockclimbing Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "17",
        name: "Tennis Party",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "18",
        name: "Rockclimbing Party Night",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "19",
        name: "Tennis Party",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "20",
        name: "Rockclimbing Party Night",
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
