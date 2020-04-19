/* eslint-disable no-undef */
require('dotenv').config();

const path = require('path');
const AutoLoad = require('fastify-autoload');
const fastifyCors = require('fastify-cors');
const fastifyJWT = require('fastify-jwt');
const jwt = require('jsonwebtoken');
const isProd = 'production';
const fastify = require('fastify')({
  // http2: true,
  logger: isProd ? 'warn' : { level: 'warn', prettyPrint: { colorize: true } },
  ignoreTrailingSlash: true,
});

const {
  JWT_SECRET_KEY,
  NODE_ENV,
  PATH,
} = process.env;

const DB = require('./db/db');

const PORT = process.env.PORT || 4001;
const { readFileSync } = require('fs')
const Sequelize = require('sequelize');

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

// fastify.register(fastifyJWT, {
//   secret: 'apnada89445462',
//   decode: { complete: true },
// });
// the files are loaded as strings
// fastify.register(fastifyJWT, {
//   secret: {
//     private: readFileSync(`${path.join(__dirname, 'certs')}/private.key`, 'utf8'),
//     public: readFileSync(`${path.join(__dirname, 'certs')}/public.key`, 'utf8')
//   },
//   sign: { algorithm: 'RS256' }
// })

fastify.register(fastifyCors, { 
  // put your options here
});

const whitelistURLs = [
  '/status',
  '/auth',
  '/public-banners'
];

fastify.addHook('preHandler', async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { url } = req.req;
    if(url && whitelistURLs && !whitelistURLs.find(whiteListurl => url.includes(whiteListurl))) {
      // jwt sign decoding
      const sdas = authorization.split(" ");
      const data = await jwt.verify(sdas[1], JWT_SECRET_KEY);
      const profile = await DB.models.User.findOne({
        where: {
          email: data && data.email ? data.email : '',
        }
      });
      req.profile = profile;
    } else {
      req.jwt = jwt;
      req.JWTSecretKey = JWT_SECRET_KEY;
    }
    req.DB = DB;
    req.SELECT = Sequelize.QueryTypes.SELECT;
    req.INSERT = Sequelize.QueryTypes.INSERT;
    req.UPDATE = Sequelize.QueryTypes.UPDATE;
    req.DELETE = Sequelize.QueryTypes.DELETE;
  } catch(ex) {
    res.code(401).send(new Error(ex.message));
  }
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