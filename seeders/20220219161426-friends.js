"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const hashedPassword = await bcrypt.hash("1234", 10);
    return queryInterface.bulkInsert("friends", [
      {
        // id: "1",
        request_to_id: "2",
        request_from_id: "3",
        status: "REQUESTED",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: "2",
        request_to_id: "1",
        request_from_id: "2",
        status: "REQUESTED",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: "3",
        request_to_id: "2",
        request_from_id: "3",
        status: "ACCEPTED",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: "4",
        request_to_id: "1",
        request_from_id: "3",
        status: "ACCEPTED",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: "5",
        request_to_id: "3",
        request_from_id: "1",
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
    await queryInterface.bulkDelete("friends", null, {});
  },
};
