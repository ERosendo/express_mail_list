const { Sequelize } = require('sequelize');

const config = require('./../config/config');
const setupModels = require('./../app/models')

const USER = encodeURI(config.dbUser);
const PASSWORD = encodeURI(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
})

setupModels(sequelize)

module.exports = sequelize