const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const Lotto = require('./lotto');
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);


db.sequelize = sequelize;
db.Lotto = Lotto;

Lotto.init(sequelize);
Lotto.associate(db);

module.exports = db;
