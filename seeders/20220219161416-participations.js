"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const hashedPassword = await bcrypt.hash("1234", 10);
    return queryInterface.bulkInsert("participations", [
      {
        // id: "1",
        event_id: "2",
        user_id: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: "2",
        event_id: "2",
        user_id: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "3",
        event_id: "3",
        user_id: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: "4",
        event_id: "4",
        user_id: "4",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: "5",
        event_id: "5",
        user_id: "5",
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
    await queryInterface.bulkDelete("participations", null, {});
  },
};
