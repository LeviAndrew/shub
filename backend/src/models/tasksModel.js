/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0];
};

const createTask = async (task) => {
    const { title } = task, query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';
    const dateUTC = new Date(Date.now()).toUTCString();

    const createdTask = await connection.execute(query, [title, 'pendente', dateUTC]);

    return {insertId: createdTask[0].insertId};
};

const updateTask = async (id, task) => {
    const { title, status } = task;
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

    const updatedTask = await connection.execute(query, [title, status, id]);

    return updatedTask[0];
};

const deleteTask = async (id) => {
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);

    return removedTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};