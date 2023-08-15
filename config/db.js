import Sequelize from 'sequelize';
import dotenv from 'dotenv/config'

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false,
    },
    pool: {
        max: 5, // maximum number of connection in the pool
        min: 0, // minimum number of connections to keep open in the pool
        acquire: 30000, // how long a connection should be idle before being
        idle: 10000, // how long a connection can stay idle in ms
    },
    operatorAliases: false
});

export default db;