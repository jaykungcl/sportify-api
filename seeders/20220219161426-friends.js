"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const hashedPassword = await bcrypt.hash("1234", 10);
    return queryInterface.bulkInsert("participants", [
      {
        id: "1",
        requestToId: "2",
        requestFromId: "3",
        status: "REQUESTED",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "2",
        requestToId: "1",
        requestFromId: "2",
        status: "REQUESTED",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "3",
        requestToId: "2",
        requestFromId: "3",
        status: "ACCPETED",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "4",
        requestToId: "1",
        requestFromId: "3",
        status: "ACCEPTED",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "5",
        requestToId: "3",
        requestFromId: "1",
        status: "REQUESTED",
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
