// If you prefer async/await, use the following
//
module.exports = async function (fastify, opts) {
  fastify.get(`/user`, async function (request, reply) {
    return 'this is an example';
  });
};
