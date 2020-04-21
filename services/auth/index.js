require('dotenv').config();

const { AUTH_ERRORS, AUTH_SUCCESS, EXCEPTIONS, HTTP_STATUS_CODES } = require('../../errors/error.js');
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
      // check if account exists
      let successMessage = await request.DB.models.User.findOne({
        where: {
          email: email,
          password: password,
        }
      });
      if(successMessage && successMessage.length != 1) { 
        opts.expiresIn = 120;  //token expires in 2min
        // const token = req.jwt.sign({ email }, opts);
        const token = request.jwt.sign({
          email: email
        }, request.JWTSecretKey, { expiresIn: '1h' });
        delete successMessage.dataValues.id;
        delete successMessage.dataValues.password;
        delete successMessage.dataValues.created;
        delete successMessage.dataValues.updated;
        successMessage.dataValues.token = token;
        const profile = successMessage;
        code = HTTP_STATUS_CODES.SUCCESS;
        res = profile;
      } else {
        code = AUTH_ERRORS.INVALID_CREDENTIAL.code;
        res = { message: AUTH_ERRORS.INVALID_CREDENTIAL.message };
      }      
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
      code = AUTH_SUCCESS.ACOUNT_CREATED.code;
      // check if email exists
      let successMessage = await request.DB.models.User.findAll({
        where: {
          email: email
        }
      });
      if(successMessage.length != 1) { 
        // create entry for new account
        successMessage = await request.DB.models.User.create({ 
          email: email,
          mobile: mobile,
          name: name,
          password: password,
        });
        if(successMessage && successMessage.id) {
          res = { message: AUTH_SUCCESS.ACOUNT_CREATED.message };
        } else {
          res = successMessage;
        }
      } else {
        code = AUTH_ERRORS.ACCOUNT_EXISTS.code;
        res = { message: AUTH_ERRORS.ACCOUNT_EXISTS.message };
      }
    } catch(exception) {
      code = HTTP_STATUS_CODES.ERROR;
      res = { message: exception.message || EXCEPTIONS.SOME_ERROR.message };
    }
    return reply.code(code).send(res);
  });
};
