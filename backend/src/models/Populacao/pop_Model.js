/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const connection = require('../connection');

const getAllPop = async () => {
    const populacao = await connection.execute('SELECT * FROM populacao');
    return populacao[0];
};

const createPop = async (pop) => {
    const { endereco, postal_code } = pop, query = 'INSERT INTO populacao(endereco, postal_code, created_at) VALUES (?, ?, ?)';
    const dateUTC = new Date(Date.now()).toUTCString(); // created_at

    const createdPop = await connection.execute(query, [endereco, postal_code, dateUTC]);

    return {insertId: createdPop[0].insertId};
};

const updatePop = async (id, pop) => {
    const { endereco, postal_code } = pop;
    const query = 'UPDATE populacao SET endereco = ?, postal_code = ? WHERE id = ?';

    const updatedPop = await connection.execute(query, [endereco, postal_code, id]);

    return updatedPop[0];
};

const deletePop = async (id) => {
    const removedPop = await connection.execute('DELETE FROM populacao WHERE id = ?', [id]);

    return removedPop;
};

module.exports = {
    getAllPop,
    createPop,
    deletePop,
    updatePop
};