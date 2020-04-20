const { AUTH_ERRORS, AUTH_SUCCESS, EXCEPTIONS, HTTP_STATUS_CODES } = require('./errors/error.js');
const { gql, makeExecutableSchema } = require('apollo-server-fastify');
// country
const { createCountry, existCountry, getCountry, getAllCountries, getCountries, updateCountry
} = require('./modals/country/function');
// order history
const { activateOrderHistory, createOrderHistory, deleteOrderHistory, existOrderHistory, getOrderHistory,
  getAllOrderHistory, updateOrderHistory } = require('./modals/orderHistory/function');
// state
const { activateState, createState, deleteState, existState, getState, updateState,
getAllState, getAllActiveState, getAllCountryState, getAllActiveCountryState} = require('./modals/state/function');
// tags
const { activateTags, createTags, deleteTags, existTags, getTags, getAllTags, updateTags
} = require('./modals/tags/function');
// user
const { activateUser, createUser, deleteUser, existUser, getUser, updateUser
} = require('./modals/user/function');
// userCompany
const { activateUserCompany, createUserCompany, deleteUserCompany, existUserCompany, getUserCompany, getAllUserCompany, updateUserCompany
} = require('./modals/userCompany/function');
// userCompany
const { activateUserDevice, createUserDevice, deleteUserDevice, existUserDevice, getUserDevice, getAllUserDevice, updateUserDevice
} = require('./modals/userDevice/function');

// The GraphQL schema
const typeDefs = gql`
  type Country {
    id: Int
    name: String
    alpha2code: String
    alpha3code: String
    isonumeric: String
    continent: String
  }
  type OrderHistory {
    id: Int
    total: Int
    status: String
    fromDate: String
    toDate: String
    userId: Int
    bannerId: Int
    isHidden: Boolean
    created: String
    updated: String
  }
  type State {
    id: Int
    name: String
    countryId: Int 
    loccode: String
    status: String
    isHidden: Boolean
    created: String
    updated: String
  }
  type Tags {
    name: String
    isHidden: Boolean
    created: String
    updated: String
  }
  type User {
    id: Int
    name: String
    mobile: String
    email: String
    password: String
    image: String
    isAdmin: Boolean
    isPartner: Boolean
    isHidden: Boolean
    created: String
    updated: String
  }
  type UserCompany {
    id: Int
    userId: Int
    companyId: Int
    isOwner: Boolean
    isMarketer: Boolean
    isHidden: Boolean
    created: String
    updated: String 
  }
  type UserDevice {
    id: Int
    userId: Int
    deviceId: Int
    isHidden: Boolean
    created: String
    updated: String 
  }
  type Query {
    # country
    countries(id: Int, name: String, alpha2code: String, alpha3code: String, isonumeric: String, continent: String): [Country]
    # orderHistory
    orderHistories(id: Int, total: Int, status: String, fromDate: String, toDate: String, userId: Int, bannerId: Int, isHidden: Boolean, created: String, updated: String): [OrderHistory]
    # state
    states(id: Int, name: String, countryId: Int, loccode: String, status: String, isHidden: Boolean, created: String, updated: String): [State]
    # tags
    tags(id: Int, name: String, isHidden: Boolean, created: String, updated: String): [Tags]
    # user
    users(id: Int, name: String, mobile: String, email: String, password: String, image: String, isAdmin: Boolean, isPartner: Boolean, isHidden: Boolean, created: String,updated: String): [User]
    # usercomapny
    userCompanies(id: Int, userId: Int, companyId: Int, isOwner: Boolean, isMarketer: Boolean, isHidden: Boolean, created: String, updated: String): [UserCompany]
    # userDevice
    userDevices(id: Int, userId: Int, deviceId: Int, isHidden: Boolean, created: String, updated: String): [UserDevice]
  }
  type Mutation {
    # country
    createCountry(name: String, alpha2code: String, alpha3code: String, isonumeric: String, continent: String): Country
    updateCountry(name: String, alpha2code: String, alpha3code: String, isonumeric: String, continent: String): Country
    # orderHistory
    createOrderHistory(id: Int, total: Int, status: String, fromDate: String, toDate: String, userId: Int, bannerId: Int,
    isHidden: Boolean, created: String, updated: String): OrderHistory
    updateOrderHistory(id: Int, total: Int, status: String, fromDate: String, toDate: String, userId: Int, bannerId: Int,
    isHidden: Boolean, created: String, updated: String): OrderHistory
    deleteOrderHistory(ids: [Int]): [OrderHistory]
    # state
    createState(name: String, countryId: Int, loccode: String, status: String): State
    updateState(name: String, countryId: Int, loccode: String, status: String): State
    # tags
    createTags(name: String): Tags
    deleteTags(ids: [Int]): [Tags]
    updateTags(id: Int, name: String, isHidden: Boolean): Tags
    # user
    activateUser(userId: Int!): User
    createUser(email: String!, password: String!, mobile: String!, name: String!): User
    deleteUser(userId: Int!): User
    updateUser(id: Int!): User
    # userCompany
    createUserCompany(userId: Int, companyId: Int): UserCompany
    updateUserCompany(id: Int!, userId: Int!, companyId: Int!): UserCompany
    # userDevice
    createUserDevice(userId: Int, deviceId: Int): UserDevice
    updateUserDevice(id: Int!, deviceId: Int!): UserDevice
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    // country
    countries: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllCountries(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // state
    states: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllState(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // tags
    tags: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllTags(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // user
    users: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        if(profile.isAdmin) {
          data = await DB.models.User.findAll({
            where: args
          });
        }
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // userCompany
    userCompanies: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllUserCompany(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // userDevice
    userDevices: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = await getAllUserDevice(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
  },
  Mutation: {
    // country
    createCountry: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name, alpha2code, alpha3code, isonumeric, continent } = args;
        if (name || alpha2code || alpha3code || isonumeric || continent) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        data = await createCountry(name, alpha2code, alpha3code, isonumeric, continent);
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateCountry: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name, alpha2code, alpha3code, isonumeric, continent } = args;
        if (profile.isAdmin && id) {
          data = await updateOrderHistory(DB, name, { alpha2code, alpha3code, isonumeric, continent });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // orderHistory
    createOrderHistory: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { total, status, fromDate, toDate, userId, bannerId } = args;
        if (!total || !status || !fromDate || !toDate || !userId || !bannerId) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        data = await createOrderHistory(DB, total, status, fromDate, toDate, userId, bannerId);
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    deleteOrderHistory: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { ids } = args;
        if (profile.isAdmin && ids) {
          data = await deleteOrderHistory(DB, ids);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateOrderHistory: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, total, status, fromDate, toDate, userId, bannerId, isHidden } = args;
        if (profile.isAdmin && id) {
          data = await updateOrderHistory(DB, id, { total, status, fromDate, toDate, userId, bannerId, isHidden });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // state
    createState: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name, countryId, loccode, status } = args;
        if (!name || !countryId || !loccode || !status) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile.isAdmin && name) {
          data = await createState(DB, name, countryId, loccode, status);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateState: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, name, countryId, loccode, status, isHidden } = args;
        if (profile.isAdmin && id) {
          data = await updateState(DB, id, { name, countryId, loccode, status, isHidden });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // tags
    createTags: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name } = args;
        if (!name) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile.isAdmin && name) {
          data = await createTags(DB, name);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    deleteTags: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { ids } = args;
        if (!ids) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile.isAdmin && ids && ids.length > 0) {
          data = await deleteTags(DB, ids);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateTags: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name, id, isHidden } = args;
        if (profile && profile.isAdmin && id && name) {
          data = await updateTags(DB, id, { name, isHidden });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // user
    activateUser: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { userId } = args;
        if (profile.isAdmin && userId) {
          data = await activateUser(DB, userId);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    createUser: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { email, password, mobile, name } = args;
        if (!email || !password || !mobile || !name) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        code = AUTH_SUCCESS.ACOUNT_CREATED.code;  
        data = await createUser(DB, email, mobile, name, password);
      } catch(ex) {
        code = HTTP_STATUS_CODES.ERROR;
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    deleteUser: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { userId } = args;
        if (profile.isAdmin && userId) {
          data = await deleteUser(DB, userId);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateUser: async(parent, args, context, info) => {
      let data = null;
      try {
        const { DB, profile } = context;
        if (profile.isAdmin && userId) {
          data = activateUser(DB, userId);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // userCompany
    createUserCompany: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { userId, companyId } = args;
        if (!userId || !companyId) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (userId && companyId) {
          data = await createUserCompany(DB, userId, companyId);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateUserCompany: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, userId, companyId } = args;
        if (!userId || !companyId) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        // only admin and owner can change userCompany
        if ((profile.isAdmin || (profile.id === userId)) && userId && companyId) {
          data = await updateUserCompany(DB, id, {userId, companyId});
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // userDevice
    createUserDevice: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { deviceId } = args;
        if (!deviceId) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile && profile.id & deviceId) {
          data = await createUserDevice(DB, deviceId);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateUserDevice: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { deviceId, id } = args;
        if (profile && profile.id & deviceId) {
          data = await updateUserDevice(DB, id, { deviceId });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
  }
};

module.exports = {
  typeDefs, resolvers
};
