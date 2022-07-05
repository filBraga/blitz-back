const express = require('express');
const TasksService = require('../services/tasksService');

const prodRouter = express.Router();

prodRouter.post('/', async (req, res) => {
	try {
		const { tasks } = req.body;
		const newTask = await TasksService.create(tasks);
		return res.status(201).json(newTask);
	} catch (error) {
		console.error(error.message);
		return res.status(500).send('Deu ruim');
	}
});

prodRouter.get('/', async (req, res) => {
	try {
		const tasks = await TasksService.getAll();
		return res.status(200).json(tasks);
	} catch (error) {
		console.error(error.message);
		return res.status(500).send('Deu ruim');
	}
});

prodRouter.put('/:id', async (req, res) => {
	try {
		const { id, name } = req.body;

		await TasksService.edit(id, name);

		return res.status(200).json({ message: 'Produto editado com sucesso' });
	} catch (error) {
		console.error(error.message);
		return res.status(500).send('Deu ruim');
	}
});

prodRouter.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		await TasksService.remove(id);

		return res.status(200).send(`Produto ${id} removido com sucesso`);
	} catch (error) {
		console.error(error.message);
		return res.status(500).send('Deu ruim');
	}
});

module.exports = prodRouter;