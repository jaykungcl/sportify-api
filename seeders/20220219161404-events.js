"use strict";

const { parse } = require("dotenv");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const hashedPassword = await bcrypt.hash("1234", 10);
    return queryInterface.bulkInsert("events", [
      {
        id: "1",
        title: "Tennis BSC Party Night",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	11.324237",
        location_lng: "102.523186",
        activity_id: 1,
        user_id: 1,
        time_start: new Date("March 17, 2022 03:24:00"),
        time_end: new Date("March 17, 2022 03:25:00"),
        active: true,
        max_people: 25,
        level: "INTERMEDIATE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "2",
        title: "Basketball TU Night",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	13.320883",
        location_lng: "77.523186",
        activity_id: 2,
        user_id: 2,
        time_start: new Date("April 17, 2022 03:24:00"),
        time_end: new Date("April 17, 2022 03:25:00"),
        active: true,
        max_people: 10,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "3",
        title: "Rockclimbing",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	13.2342",
        location_lng: "99.30987",
        activity_id: 3,
        user_id: 3,
        time_start: new Date("May 17, 2022 03:24:00"),
        time_end: new Date("May 17, 2022 03:25:00"),
        active: true,
        max_people: 20,
        level: "INTERMEDIATE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "4",
        title: "Lasergame Night",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	14.736717",
        location_lng: "102.523186",
        activity_id: 4,
        user_id: 4,
        time_start: new Date("June 17, 2022 03:24:00"),
        time_end: new Date("June 17, 2022 03:25:00"),
        active: true,
        max_people: 10,
        level: "ADVANCE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "5",
        title: "Football CU Club",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	13.736717",
        location_lng: "100.523186",
        activity_id: 5,
        user_id: 5,
        time_start: new Date("July 17, 2022 03:24:00"),
        time_end: new Date("July 17, 2022 03:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "6",
        title: "Camping",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "13.748763",
        location_lng: "100.480897",
        activity_id: 6,
        user_id: 6,
        time_start: new Date("May 20, 2022 05:24:00"),
        time_end: new Date("May 23, 2022 10:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "7",
        title: "Capture the Flag",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	13.749387",
        location_lng: "100.485415",
        activity_id: 7,
        user_id: 7,
        time_start: new Date("July 25, 2022 06:24:00"),
        time_end: new Date("July 27, 2022 02:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "8",
        title: "Fishing",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	13.754441",
        location_lng: "100.488507",
        activity_id: 8,
        user_id: 8,
        time_start: new Date("January 2, 2022 09:24:00"),
        time_end: new Date("January 2, 2022 17:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "9",
        title: "Hide and Seek",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	13.748671",
        location_lng: "100.502486",
        activity_id: 9,
        user_id: 9,
        time_start: new Date("Febuary 2, 2022 10:24:00"),
        time_end: new Date("Febuary 2, 2022 15:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "10",
        title: "Running",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	13.748460",
        location_lng: "100.494593",
        activity_id: 10,
        user_id: 10,
        time_start: new Date("July 20, 2022 03:24:00"),
        time_end: new Date("July 20, 2022 04:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "11",
        title: "Walking",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	13.731701",
        location_lng: "100.539693",
        activity_id: 11,
        user_id: 11,
        time_start: new Date("July 26, 2022 06:24:00"),
        time_end: new Date("July 26, 2022 07:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "12",
        title: "RSBC Meet",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	13.738247",
        location_lng: "100.537416",
        activity_id: 12,
        user_id: 12,
        time_start: new Date("March 2, 2022 09:24:00"),
        time_end: new Date("March 2, 2022 12:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "13",
        title: "Tennis",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "13.732107",
        location_lng: "100.538792",
        activity_id: 13,
        user_id: 13,
        time_start: new Date("September 20, 2022 06:24:00"),
        time_end: new Date("September 20, 2022 07:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "14",
        title: "Swimming",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	13.710659",
        location_lng: "100.510320",
        activity_id: 14,
        user_id: 14,
        time_start: new Date("June 10, 2022 08:24:00"),
        time_end: new Date("June 10, 2022 09:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "15",
        title: "Cycling",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	13.723749",
        location_lng: "13.723749",
        activity_id: 15,
        user_id: 15,
        time_start: new Date("May 5, 2022 10:24:00"),
        time_end: new Date("May 5, 2022 12:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "16",
        title: "Beach Volleyball",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	12.940467",
        location_lng: "100.884605",
        activity_id: 16,
        user_id: 16,
        time_start: new Date("July 22, 2022 17:24:00"),
        time_end: new Date("July 22, 2022 19:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "17",
        title: "Diving",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	12.916075",
        location_lng: "100.778363",
        activity_id: 17,
        user_id: 17,
        time_start: new Date("July 28, 2022 10:20:00"),
        time_end: new Date("July 28, 2022 12:45:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "18",
        title: "Skateboarding",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "	40.716182",
        location_lng: "-74.001936",
        activity_id: 18,
        user_id: 18,
        time_start: new Date("July 29, 2022 09:24:00"),
        time_end: new Date("July 29, 2022 19:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "19",
        title: "Photo Shoot",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "40.716263",
        location_lng: "-73.996437",
        activity_id: 19,
        user_id: 19,
        time_start: new Date("July 5, 2022 09:24:00"),
        time_end: new Date("July 5, 2022 11:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "20",
        title: "Hide and Seek ",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        location_lat: "40.710771",
        location_lng: "-73.999522",
        activity_id: 20,
        user_id: 20,
        time_start: new Date("July 12, 2022 12:24:00"),
        time_end: new Date("July 12, 2022 13:25:00"),
        active: true,
        max_people: 40,
        level: "BEGINNER",
        created_at: new Date(),
        updated_at: new Date(),
      },

      // {
      //   id: "7",
      //   title: "Batminton",
      //   detail: "Intermidiate",
      //   location_lat: "	13.736717",
      //   location_long: "100.523186",
      //   activity_id: "8",
      //   user_id: "21.00",
      //   time_start: "21.00",
      //   time_end: "24.00",
      //   active: "true",
      //   created_at: new Date(),
      //   updated_at: new Date(),
      // },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("events", null, {});
  },
};
