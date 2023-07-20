/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');
const tasksController_Pop = require('./controllers/Populacao/tasksController_Pop');
const tasksMiddleware_Pop = require('./middlewares/Populacao/tasksMiddleware_Pop');

const router = express.Router();

// Para a tabela tasks
router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validadeBodyCreate, tasksController.createTask);
router.put('/tasks/:id', tasksMiddleware.validadeBodyUpdate, tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);

// Para a tabela populacao
router.get('/pop', tasksController_Pop.getAllPop);
router.post('/pop', tasksMiddleware_Pop.validadeBodyCreate, tasksController_Pop.createPop);
router.put('/pop/:id', tasksMiddleware_Pop.validadeBodyUpdate, tasksController_Pop.updatePop);
router.delete('/pop/:id', tasksController_Pop.deletePop);

module.exports = router;