const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    username: String
    profilePicture: String
    area: String
    birthday: Date
    flakeRating: Int
    publicRequest: [String]
    userRequests: [String]
    events_attend: [
      {
        eventName: String
        date: Date
      }
    ]
    connection: [
      {
        selfUsername: String,
        otherUsername: String,
        closeFriend: Boolean
      }
    ]
    events: [Event]
    groups: [Group]
  }

  type Event {
    _id: ID,
    createdAt: Date,
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
    recap: [
      {
        images: String,
        eventDescription: String
      }
    ]
  }

  type Group {
    title: String,
    member: [Profile],
    events: [Event]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;