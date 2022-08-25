const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    username: String
    profile_picture: Image
    area: String
    birthday: String
    flake_rating: Int
    public_request: [String]
    user_requests: [String]
    events_attend: [
      {
        event_name: String
        date: Date
      }
    ]
    events: [Event]
    connections: [
      {
        self_username: String,
        other_username: String,
        close_friend: Boolean
      }
    ]
    groups: [Group]
  }

  type Event {
    _id: ID,
    date: Date,
    time: String,
    commitments: [String],
    flakes: [String],
    theme: String,
    active: Boolean,
    author: String,
    description: String,
    address: String,
    private: Boolean,
    image: Image,
    recaps: [
      {
        images: Image,
        event_description: String
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
    me: User #we can delete this once other Query's are added. Just needed this as a place holder for the login/sign up feature. 
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;