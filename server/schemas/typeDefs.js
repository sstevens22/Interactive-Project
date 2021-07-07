const { gql } = require('apollo-server-express');

const typeDefs = gql`
type WaterSign {
    waterMessage: String
    createdAt: String
    username: String
}

type EarthSign {
    earthMessage: String
    createdAt: String
    username: String
}

type AirSign {
    airMessage: String
    createdAt: String
    username: String
}

type FireSign {
    fireMessage: String
    createdAt: String
    username: String
}

type User {
    _id: ID
    username: String
    email: String
    createdAt: String
    waterSigns: [WaterSign]
    earthSigns: [EarthSign]
    airSigns: [AirSign]
    fireSigns: [FireSign]
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    waterSigns(username: String): [WaterSign]
    earthSigns(username: String): [EarthSign]
    airSigns(username: String): [AirSign]
    fireSigns(username: String): [FireSign]
    waterSign(_id: ID!): WaterSign
    earthSign(_id: ID!): EarthSign
    airSign(_id: ID!): AirSign
    fireSign(_id: ID!): FireSign
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addWaterSign(waterMessage: String!): WaterSign
    addEarthSign(earthMessage: String!): EarthSign
    addAirSign(airMessage: String!): AirSign
    addFireSign(fireMessage: String!): FireSign
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