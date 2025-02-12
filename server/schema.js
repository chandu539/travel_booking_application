const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Booking {
    id: ID!
    name: String!
    destination: String!
    date: String!
    price: Float!
  }

  type Query {
    getBookings: [Booking]
  }

  type Mutation {
    addBooking(name: String!, destination: String!, date: String!, price: Float!): Booking
  }
`;

module.exports = typeDefs;
