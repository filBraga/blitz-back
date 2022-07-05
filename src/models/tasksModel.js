const Tasks = (sequelize, DataTypes) => {
	const Tasks = sequelize.define('Tasks', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		text: DataTypes.STRING
	}, {
		timestamps: false,
	}
	);

	return Tasks;
};

module.exports = Tasks;