module.exports = (sequelize, DataTypes) => {
	const Activity = sequelize.define(
		"Activity",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			icon: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			underscored: true,
		}
	);

	Activity.associate = (models) => {
		Activity.hasMany(models.Event, {
			foriegnKey: {
				name: "activityId",
				allowNull: false,
			},
		});
	};

	return Activity;
};
