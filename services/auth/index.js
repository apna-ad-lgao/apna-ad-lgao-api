const { AUTH_ERRORS, EXCEPTIONS, HTTP_STATUS_CODES } = require('../../errors/error.js');
// If you prefer async/await, use the following
//
const apiVersion = '/api/v1';
module.exports = async (fastify, opts) => {
  fastify.get(`${apiVersion}/auth/forgot-password`, async (request, reply) => {
    let code, res;
    try {
      const { email } = request;
      if (!email) throw new Error(AUTH_ERRORS.NO_EMAIL.message);
      code = HTTP_STATUS_CODES.SUCCESS;
    } catch(exception) {
      code = HTTP_STATUS_CODES.ERROR;
      res = { message: exception.message || EXCEPTIONS.SOME_ERROR.message };
    }
    return reply.code(code).send(res);
  });

  fastify.post(`${apiVersion}/auth/login`, async (request, reply) => {
    let res;
    try {
      const { email, password } = request.body;
      if (!email || !password) throw new Error(AUTH_ERRORS.INVALID_CREDENTIAL.message);
      const token = fastify.jwt.sign({ email, password });
      console.log(`token is: ${token}`);
      code = HTTP_STATUS_CODES.SUCCESS;
      res = { token };
    } catch(exception) {
      code = HTTP_STATUS_CODES.ERROR;
      res = { message: exception.message || EXCEPTIONS.SOME_ERROR.message };
    }
    return reply.code(code).send(res);
  });

  fastify.post(`${apiVersion}/auth/register`, async (request, reply) => {
    let res;
    try {
      const { email, password, mobile, name } = request.body;
      if (!email || !password || !mobile || !name) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
      code = HTTP_STATUS_CODES.SUCCESS;
      // const query = 'INSERT INTO User ()';
      // const successMessage = request.DB.query(query, {
      //   model: request.DB.model.USER,
      //   type: request.INSERT,
      //   mapToModel: true,
      // });
      const successMessage = await request.DB.models.User.create({ 
        email: email,
        mobile: mobile,
        name: name,
        password: password,
       });
      console.log(`successMessage is: ${JSON.stringify(successMessage)}`);
      code = HTTP_STATUS_CODES.SUCCESS;
    } catch(exception) {
      code = HTTP_STATUS_CODES.ERROR;
      res = { message: exception.message || EXCEPTIONS.SOME_ERROR.message };
    }
    return reply.code(code).send(res);
  });
};
