import { gql } from "@apollo/client";

export const GET_BOOKINGS = gql`
  query {
    getBookings {
      id
      name
      destination
      date
      price
    }
  }
`;

export const ADD_BOOKING = gql`
  mutation AddBooking($name: String!, $destination: String!, $date: String!, $price: Float!) {
    addBooking(name: $name, destination: $destination, date: $date, price: $price) {
      id
      name
      destination
      date
      price
    }
  }
`;
