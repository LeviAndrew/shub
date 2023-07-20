/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3333; // MySQL
// const PG_PORT = process.env.PG_PORT || 5432; // PostgreSQL

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}!`));