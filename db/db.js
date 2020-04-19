/* eslint-disable no-undef */
require('dotenv').config();
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const {
  SQL_DB_USER,
  SQL_DB_PASSWORD,
  SQL_DB_DB,
  SQL_DB_HOST,
  NODE_ENV,
} = process.env;

const isProd = NODE_ENV === 'production';

console.log(`user is: ${SQL_DB_USER}`);

const modelPath = path.join(__dirname, '../modals/');
const db = {};

// fs
//   .readdirSync(modelPath)
//   .filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     const model = sequelizeconnection.import(modelPath + file);
//     db[model.name] = model;
//   });

//     Object.keys(db).forEach((modelName) => {
//       if (db[modelName].associate) {
//         db[modelName].associate(db);
//       }
//     });

const Conn = new Sequelize({
  username: SQL_DB_USER,
  password: SQL_DB_PASSWORD,
  database: SQL_DB_DB,
  dialect: 'mysql',
  port: '3306',
  host: SQL_DB_HOST,
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
  define: {
    timestamps: false,
  },
  logging: !isProd,
});


fs.readdirSync(modelPath)
  .forEach((file) => {
    if (file != 'currency') {
      const model = Conn.import(modelPath + file + "/" + file + ".js");
      db[model.name] = model;
    }
  });
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

Conn
  .authenticate()
  .then(async() => {
    console.log(`DB connection has been established successfully.:${SQL_DB_HOST}`); // eslint-disable-line
    console.log(`finished ${Conn.model.state}`);
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err); // eslint-disable-line
  });

  module.exports = Conn;