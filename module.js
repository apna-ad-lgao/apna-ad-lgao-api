const { AUTH_ERRORS, AUTH_SUCCESS, EXCEPTIONS, HTTP_STATUS_CODES } = require('./errors/error.js');
const { gql, makeExecutableSchema } = require('apollo-server-fastify');
// country
const { createCountry, existCountry, getCountry, getAllCountries, getCountries, updateCountry
} = require('./modals/country/function');
// state
const { activateState, createState, deleteState, existState, getState, updateState,
getAllState, getAllActiveState, getAllCountryState, getAllActiveCountryState} = require('./modals/state/function');
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
    # state
    states(id: Int, name: String, countryId: Int, loccode: String, status: String,
    isHidden: Boolean, created: String, updated: String): [State]
    # user
    users(id: Int, name: String, mobile: String, email: String, password: String, image: String
    isAdmin: Boolean, isPartner: Boolean, isHidden: Boolean, created: String,updated: String): [User]
    # usercomapny
    userCompanies(id: Int, userId: Int, companyId: Int, isOwner: Boolean, isMarketer: Boolean,
    isHidden: Boolean, created: String, updated: String): [UserCompany]
    # userDevice
    userDevices(id: Int, userId: Int, deviceId: Int, isHidden: Boolean, created: String, updated: String): [UserDevice]
  }
  type Mutation {
    # country
    createCountry(name: String, alpha2code: String, alpha3code: String, isonumeric: String, continent: String): Country
    updateCountry(name: String, alpha2code: String, alpha3code: String, isonumeric: String, continent: String): Country
    # user
    activateUser(userId: Int!): User
    createUser(email: String!, password: String!, mobile: String!, name: String!): User
    deleteUser(userId: Int!): User
    updateUser(id: Int!): User
    # userCompany
    createUserCompany(userId: Int, companyId: Int): UserCompany
    updateUserCompany(id: Int!): UserCompany
    # userDevice
    createUserDevice(userId: Int, companyId: Int): UserDevice
    updateUserDevice(id: Int!): UserDevice
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
  }
};

module.exports = {
  typeDefs, resolvers
};
