const { Tasks } = require('../models');

const createTask = async (text) => {
	const newTask = await Tasks.create({ text });
	return newTask;
};

const readTask = async () => {
	const tasks = await Tasks.findAll();
	return tasks;
};

const updateTask = async (id, text) => {
	await Tasks.update(
		{ text },
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