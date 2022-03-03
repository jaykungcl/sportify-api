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
