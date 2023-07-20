/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const tasksModel = require('../models/tasksModel');

const getAll = async (_req, res) => {
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
    const createdTask = await tasksModel.createTask(req.body);
    return res.status(201).json(createdTask);
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    await tasksModel.updateTask(id, req.body);
    return res.status(204).json();
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    await tasksModel.deleteTask(id);
    return res.status(204).json();
};

module.exports = {
    getAll,
    createTask,
    updateTask,
    deleteTask
};