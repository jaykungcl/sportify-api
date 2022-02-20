"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const hashedPassword = await bcrypt.hash("1234", 10);
    return queryInterface.bulkInsert("events", [
      {
        id: "1",
        title: "Tennis BSC Party Night",
        detail: "Intermidiate",
        location_lat: "	13.736717",
        location_long: "100.523186",
        activity_id: "1",
        user_id: "1",
        time_start: "21.00",
        time_end: "24.00",
        active: "true",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "2",
        title: "Basketball TU Night",
        detail: "Intermidiate",
        location_lat: "	13.736717",
        location_long: "100.523186",
        activity_id: "2",
        user_id: "2",
        time_start: "21.00",
        time_end: "24.00",
        active: "true",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "3",
        title: "Rockclimbing",
        detail: "Intermidiate",
        location_lat: "	13.736717",
        location_long: "100.523186",
        activity_id: "3",
        user_id: "3",
        time_start: "21.00",
        time_end: "24.00",
        active: "true",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "4",
        title: "Lasergame Night",
        detail: "Intermidiate",
        location_lat: "	13.736717",
        location_long: "100.523186",
        activity_id: "4",
        user_id: "21.00",
        time_start: "21.00",
        time_end: "24.00",
        active: "true",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "5",
        title: "Football CU Club",
        detail: "Intermidiate",
        location_lat: "	13.736717",
        location_long: "100.523186",
        activity_id: "6",
        user_id: "5",
        time_start: "21.00",
        time_end: "24.00",
        active: "true",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "7",
        title: "Batminton",
        detail: "Intermidiate",
        location_lat: "	13.736717",
        location_long: "100.523186",
        activity_id: "8",
        user_id: "21.00",
        time_start: "21.00",
        time_end: "24.00",
        active: "true",
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
