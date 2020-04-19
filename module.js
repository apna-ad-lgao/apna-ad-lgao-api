const DB = require('./db/db');
const { gql } = require('apollo-server-fastify');

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
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    user: async(parent, args, context, info) => {
        const { email } = args;
        const data = await DB.models.User.findOne({
            where: {
              email: email,
            }
        });
        return data;
    },
    users: async(parent, args, context, info) => {
        const email = 'adityakumarverma1993@gmail.com';
        return await DB.models.User.findAll();
    },
  },
};

module.exports = {
    typeDefs,
    resolvers
};