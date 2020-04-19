const apiVersion = require('../package.json').version;

module.exports = async function (fastify, opts) {
  
  fastify.get('/status', (request, reply) => {
    reply.send({ status: 'online', apiVersion });
  });
  
};
