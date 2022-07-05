const Task = (sequelize, DataTypes) => {
	const Task = sequelize.define('Task', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		task: DataTypes.STRING
	}, {
		timestamps: false,
	}
	);

	return Task;
};

module.exports = Task;