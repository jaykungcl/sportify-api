const bcrypt = require("bcryptjs");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const hashedPassword = await bcrypt.hash("1234", 10);
    return queryInterface.bulkInsert("users", [
      {
        first_name: "Tracy",
        last_name: "Kemp",
        email: "tracy@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebook_id: "2020",
        google_id: "2020",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Jay",
        last_name: "Kemp",
        email: "jay@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebook_id: "2024",
        google_id: "2022",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Tan",
        last_name: "Jai",
        email: "tanjai@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebook_id: "2025",
        google_id: "2029",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Kenta",
        last_name: "Kunjung",
        email: "kenta@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebook_id: "2021",
        google_id: "202",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Bo",
        last_name: "jung",
        email: "Bojung@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebook_id: "114",
        google_id: "229",
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
    await queryInterface.bulkDelete("users", null, {});
  },
};
