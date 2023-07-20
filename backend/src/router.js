/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validadeBodyCreate, tasksController.createTask);
router.put('/tasks/:id', tasksMiddleware.validadeBodyUpdate, tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;