const express = require('express');
const TasksService = require('../services/tasksService');

const taskRouter = express.Router();

taskRouter.post('/', async (req, res) => {
	try {
		const { text } = req.body;
		const newTask = await TasksService.createTask(text);
		return res.status(201).json(newTask);
	} catch (error) {
		console.error(error.message);
		return res.status(500).send('Deu ruim aqui 13');
	}
});

taskRouter.get('/', async (req, res) => {
	try {
		const tasks = await TasksService.readTask();
		return res.status(200).json(tasks);
	} catch (error) {
		console.error(error.message);
		return res.status(500).send('Deu ruim');
	}
});

taskRouter.put('/:id', async (req, res) => {
	try {

		const { id } =  req.params;
		const { text } = req.body;

		await TasksService.updateTask(id, text);

		return res.status(200).json({ message: 'Produto editado com sucesso' });
	} catch (error) {
		console.error(error.message);
		return res.status(500).send('Deu ruim');
	}
});

taskRouter.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		await TasksService.deleteTask(id);

		return res.status(200).send(`Produto ${id} removido com sucesso`);
	} catch (error) {
		console.error(error.message);
		return res.status(500).send('Deu ruim');
	}
});

module.exports = taskRouter;