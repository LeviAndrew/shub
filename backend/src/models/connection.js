/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
require('dotenv').config();

// Conexão com o MySQL
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

// Conexão com PostgreSQL
// const pgsql = require('pq');

// const connection = pgsql.Client({
//     host: process.env.PG_HOST,
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     database: process.env.PG_DB,
//     port: process.env.PG_PORT
// });

module.exports = connection;