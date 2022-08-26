const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String!
    lastName: String
    email: String!
    username: String
    profilePicture: String
    area: String
    birthday: String
    flakeRating: Int
    publicRequest: [String]
    userRequests: [String]
    events: [Event]
    groups: [Group]
    
  }

  type Event {
    _id: ID
    createdAt: String!,
    time: String,
    commitments: [String],
    flakes: [String],
    theme: String,
    active: Boolean,
    author: String,
    description: String,
    address: String,
    private: Boolean,
    image: String,
  }

  type Group {
    _id: ID
    title: String
    members: [User]
    events: [Event]
  }

  type Connection {
    selfUsername: String!
    otherUsername: String
    closeFriend: Boolean
    connections: [String]
  }


  type Event {
    createdAt: String!
    time: String
    commitments: [String]
    flake: [String]
    theme: String
    active: String
    author: String
    description: String
    address: String
    private: String
    image: String
  }

  type Recap {
    image: String
    eventDescription: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    user(email: String!): User
    users: [User]
    events: [Event]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;