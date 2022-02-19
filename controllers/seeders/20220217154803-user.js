const bcrypt = require("bcryptjs");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const hashedPassword = await bcrypt.hash("1234", 10);
    return queryInterface.bulkInsert("users", [
      {
        firstName: "Tracy",
        lastName: "Kemp",
        email: "tracy@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebookId: "2020",
        googleId: "2020",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstName: "Jay",
        lastName: "Kemp",
        email: "jay@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebookId: "2024",
        googleId: "2022",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstName: "Tan",
        lastName: "Jai",
        email: "tanjai@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebookId: "2025",
        googleId: "2029",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstName: "Kenta",
        lastName: "Kunjung",
        email: "kenta@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebookId: "2021",
        googleId: "202",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstName: "Bo",
        lastName: "jung",
        email: "Bojung@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebookId: "114",
        googleId: "229",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  //   down: async (queryInterface, Sequelize) => {
  //     /**
  //      * Add commands to revert seed here.
  //      *
  //      * Example:
  //      * await queryInterface.bulkDelete('People', null, {});
  //      */
  //   }
};
