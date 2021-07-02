const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    createdAt: String
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
}

type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
}

type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;

//zodiacSign: [Horoscope]

//type Horoscope {
//     _id: ID
//     zodiacSign: String
//     zodiacDate: String
// }

//for type query:
//horoscope(_id: ID!): Horoscope