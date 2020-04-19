const { AUTH_ERRORS, AUTH_SUCCESS, EXCEPTIONS, HTTP_STATUS_CODES } = require('../../errors/error.js');
// If you prefer async/await, use the following
//
const apiVersion = '/api/v1';
module.exports = async (fastify, opts) => {
  fastify.get(`${apiVersion}/public-banners`, async (request, reply) => {
    let code, res;
    try {
      code = HTTP_STATUS_CODES.SUCCESS;
      const page = 0;
      const pageSize = 20;
      const offset = page * pageSize;
      const limit = pageSize;    
      const data = await request.DB.models.Banner.findAll({limit: limit, offset: offset});
      res = data;
    } catch(exception) {
      code = HTTP_STATUS_CODES.ERROR;
      res = { message: exception.message || EXCEPTIONS.SOME_ERROR.message };
    }
    return reply.code(code).send(res);
  });

  fastify.get(`${apiVersion}/public-banners/:bannerId`, async (request, reply) => {
    let code, res;
    try {
      code = HTTP_STATUS_CODES.SUCCESS; 
      const data = await request.DB.models.Banner.findOne({
        where: {
          id: bannerId,
        }
      });
      res = data;
    } catch(exception) {
      code = HTTP_STATUS_CODES.ERROR;
      res = { message: exception.message || EXCEPTIONS.SOME_ERROR.message };
    }
    return reply.code(code).send(res);
  });

  fastify.get(`${apiVersion}/banners/:page/:pageSize`, async (request, reply) => {
    let code, res;
    try {
      code = HTTP_STATUS_CODES.SUCCESS;
      const offset = page * pageSize;
      const limit = pageSize;   
      const data = await request.DB.models.Banner.findAll({limit: limit, offset: offset});
      res = data;
    } catch(exception) {
      code = HTTP_STATUS_CODES.ERROR;
      res = { message: exception.message || EXCEPTIONS.SOME_ERROR.message };
    }
    return reply.code(code).send(res);
  });

  fastify.get(`${apiVersion}/banners/:bannerId`, async (request, reply) => {
    let code, res;
    try {
      code = HTTP_STATUS_CODES.SUCCESS; 
      const data = await request.DB.models.Banner.findOne({
        where: {
          id: bannerId,
        }
      });
      res = data;
    } catch(exception) {
      code = HTTP_STATUS_CODES.ERROR;
      res = { message: exception.message || EXCEPTIONS.SOME_ERROR.message };
    }
    return reply.code(code).send(res);
  });

  fastify.post(`${apiVersion}/banners`, async (request, reply) => {
    let res;
    try {
      const { name, description, image, addressId, latitude, longitude, industryId, categoryId, mediaTypeId, ainNumber,
        facingFrom, towardsTo, size, sft, isLightning, isDigital, price, currencyId, bookingStartDate, bookingEndDate, activeStartDate,
        activeEndDate } = request.body;
      if(!(name || description || image || addressId || latitude || longitude || industryId || categoryId || mediaTypeId || ainNumber ||
        facingFrom || towardsTo || size || sft || isLightning || isDigital || price, currencyId || bookingStartDate || bookingEndDate || activeStartDate,
        activeEndDate)) {

        } 
    } catch(exception) {
      code = HTTP_STATUS_CODES.ERROR;
      res = { message: exception.message || EXCEPTIONS.SOME_ERROR.message };
    }
    return reply.code(code).send(res);
  });

};
