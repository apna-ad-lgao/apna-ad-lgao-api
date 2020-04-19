const { AUTH_ERRORS, AUTH_SUCCESS, EXCEPTIONS, HTTP_STATUS_CODES } = require('./errors/error.js');
const { gql, makeExecutableSchema } = require('apollo-server-fastify');
const { activateUser, createUser, deleteUser, existUser, getUser, updateUser
} = require('./modals/user/function');

// The GraphQL schema
const typeDefs = gql`
  type User {
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
  type Query {
    user(email: String!): User
    users: [User]
  }
  type Mutation {
    activateUser(userId: Int!): User
    createUser(email: String!, password: String!, mobile: String!, name: String!): User
    deleteUser(userId: Int!): User
    updateUser(id: Int!): User
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    user: async(parent, args, context, info) => {
      let data = null;
      try {
        const { DB, profile } = context;
        data = getUser(DB, profile.id);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    users: async(parent, args, context, info) => {
      const { DB, profile } = context;
      let data = null;
      if(profile.isAdmin) {
        data = await DB.models.User.findAll();
      }
      return data;
    },
  },
  Mutation: {
    activateUser: async(parent, args, context, info) => {
      let data = null, code = null;
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
      let data = null;
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
