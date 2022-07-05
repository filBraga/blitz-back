require("dotenv").config();

const { create, findAll  } = require("../src/services");
const Task = require("../src/models/tasksModel");

Task.create({
  id: 1,
  task: 'seed task',
});

Task.findAll().then((result) => {
  console.log(result);
});