/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const popsModel = require('../../models/Populacao/pop_Model');

const getAllPop = async (_req, res) => {
    const tasks = await popsModel.getAllPop();
    return res.status(200).json(tasks);
};

const createPop = async (req, res) => {
    const createdPop = await popsModel.createPop(req.body);
    return res.status(201).json(createdPop);
};

const updatePop = async (req, res) => {
    const { id } = req.params;
    await popsModel.updatePop(id, req.body);
    return res.status(204).json();
};

const deletePop = async (req, res) => {
    const { id } = req.params;
    await popsModel.deletePop(id);
    return res.status(204).json();
};

module.exports = {
    getAllPop,
    createPop,
    updatePop,
    deletePop
};