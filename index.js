/* eslint-disable no-undef */
require('dotenv').config();

const path = require('path');
const AutoLoad = require('fastify-autoload');
const fastifyCors = require('fastify-cors');
const fastifyJWT = require('fastify-jwt');
const isProd = 'production';
const fastify = require('fastify')({
  // http2: true,
  logger: isProd ? 'warn' : { level: 'warn', prettyPrint: { colorize: true } },
  ignoreTrailingSlash: true,
});

const {
  NODE_ENV,
  PATH,
} = process.env;

const DB = require('./db/db');

const PORT = process.env.PORT || 4001;
// module.exports = function (fastify, opts, next) {
//   // Place here your custom code!

//   // Do not touch the following lines

//   // This loads all plugins defined in plugins
//   // those should be support plugins that are reused
//   // through your application
//   fastify.register(AutoLoad, {
//     dir: path.join(__dirname, 'plugins'),
//     options: Object.assign({}, opts),
//   });

//   // This loads all plugins defined in services
//   // define your routes in one of these
//   fastify.register(AutoLoad, {
//     dir: path.join(__dirname, 'services'),
//     options: Object.assign({}, opts),
//   });

//   fastify.register(fastifyJWT, {
//     secret: 'supersecret'
//   });

//   // Make sure to call next when done
//   next();
// };

fastify.addHook('preHandler', async (req, res) => {
  // const { authorization } = req.headers;
  // const authorizedOhrId = req.headers['x-authorized-ohrid'];
  // const sentAuthError = (errorMessage) => {
  //   res.code(401).send(new Error(errorMessage));
  // };

  // if (!authorizedOhrId) { return sentAuthError('You must send an Authorization header.'); }
  req.DB = DB;
});

let opts;

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
    options: Object.assign({}, opts),
  });

  fastify.register(fastifyJWT, {
    secret: 'apn@adad@89445462'
  });

  fastify.register(fastifyCors, { 
    // put your options here
  });

  const start = async () => {
    try {
      await fastify.listen(PORT);
      fastify.log.info(
        `GraphQL server ready at :${PORT}${PATH}`,
      );
    } catch (err) {
      fastify.log.error(err);
      console.log(err); //eslint-disable-line
      process.exit(1);
    }
  };
  start();