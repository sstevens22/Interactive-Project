const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    createdAt: String
    zodiacSign: [Horoscope]
}

type Horoscope {

}

type Query {

}

type Mutation {

}

type Auth {
    token: ID!
    user: User
  }
`;



module.exports = typeDefs;