const { Task } = require('../models');

const createTask = async (task) => {
	const newTask = await Task.create({ task });
	return newTask;
};

const readTask = async () => {
	const tasks = await Tasks.findAll();
	return tasks;
};

const updateTask = async (id, task) => {
	await Tasks.update(
		{ id, task },
		{ where: { id } }
	);
	return true;
};

const deleteTask = async (id) => {
	await Tasks.destroy({
		where: { id }
	});
	return true;
};

module.exports = {
	createTask,
	readTask,
	updateTask,
	deleteTask,
};