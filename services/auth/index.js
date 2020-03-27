const { AUTH_ERRORS, EXCEPTIONS, HTTP_STATUS_CODES } = require('../../errors/error.js');
// If you prefer async/await, use the following
//
module.exports = async (fastify, opts) => {
  fastify.get(`/auth/forgot-password`, async (request, reply) => {
    let code, res;
    try {
      const { email } = request;
      if (!email) throw new Error(AUTH_ERRORS.NO_EMAIL.message);
      code = HTTP_STATUS_CODES.SUCCESS;
    } catch(exception) {
      code = HTTP_STATUS_CODES.ERROR;
      res = exception.message || EXCEPTIONS.SOME_ERROR.message;
    }
    return reply.code(code).send(res);
  });

  fastify.post(`/auth/login`, async (request, reply) => {
    let res;
    try {
      const { email, password } = request.body;
      if (!email || !password) throw new Error(AUTH_ERRORS.INVALID_CREDENTIAL.message);
      code = HTTP_STATUS_CODES.SUCCESS;
    } catch(exception) {
      code = HTTP_STATUS_CODES.ERROR;
      res = exception.message || EXCEPTIONS.SOME_ERROR.message;
    }
    return reply.code(code).send(res);
  });

  fastify.post(`/auth/register`, async (request, reply) => {
    let res;
    try {
      const { email, password } = request.body;
      if (!email || !password) throw new Error(AUTH_ERRORS.INVALID_CREDENTIAL.message);
      code = HTTP_STATUS_CODES.SUCCESS;
    } catch(exception) {
      code = HTTP_STATUS_CODES.ERROR;
      res = exception.message || EXCEPTIONS.SOME_ERROR.message;
    }
    return reply.code(code).send(res);
  });
};
