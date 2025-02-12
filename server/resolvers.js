const Booking = require("./models/Booking");

const resolvers = {
  Query: {
    getBookings: async () => await Booking.find(),
  },
  Mutation: {
    addBooking: async (_, { name, destination, date, price }) => {
      const newBooking = new Booking({ name, destination, date, price });
      return await newBooking.save();
    }
  }
};

module.exports = resolvers;
