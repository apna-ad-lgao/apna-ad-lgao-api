/* eslint-disable no-undef */
require('dotenv').config();
const Sequelize = require('sequelize');

const {
  SQL_DB_USER,
  SQL_DB_PASSWORD,
  SQL_DB_DB,
  SQL_DB_HOST,
  NODE_ENV,
} = process.env;

const isProd = NODE_ENV === 'production';

console.log(`user is: ${SQL_DB_USER}`);

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

Conn
  .authenticate()
  .then(async() => {
    console.log(`DB connection has been established successfully.:${SQL_DB_HOST}`); // eslint-disable-line
    console.log(`finished ${Conn.model.state}`);
    const userData = await Conn.query(
      'Select * from UserCompany', {
        model: Conn.model.UserCompany,
        type: Sequelize.QueryTypes.SELECT,
        mapToModel: true,
      },
    );
    console.log(`userData is: ${JSON.stringify(userData)}`);
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err); // eslint-disable-line
  });