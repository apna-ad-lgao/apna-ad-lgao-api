const apiVersion = require('../package.json').version;

module.exports = async function (fastify, opts) {
  
  fastify.get('/', (request, reply) => {
    reply.send({ status: 'ondsline', apiVersion });
  });
  
};
