const bcrypt = require("bcryptjs");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const hashedPassword = await bcrypt.hash("1234", 10);
    return queryInterface.bulkInsert("users", [
      {
        id: 1,
        first_name: "Tracy",
        last_name: "Kemp",
        email: "tracy@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebook_id: "2020",
        google_id: "2020",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        first_name: "Jay",
        last_name: "Kemp",
        email: "jay@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebook_id: "2024",
        google_id: "2022",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        first_name: "Tan",
        last_name: "Jai",
        email: "tanjai@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebook_id: "2025",
        google_id: "2029",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        first_name: "Kenta",
        last_name: "Kunjung",
        email: "kenta@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebook_id: "2021",
        google_id: "202",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        first_name: "Bo",
        last_name: "jung",
        email: "Bojung@gmail.com",
        password: await bcrypt.hash("1234", 10),
        facebook_id: "114",
        google_id: "229",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
