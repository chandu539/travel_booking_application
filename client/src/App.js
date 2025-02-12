import React, { useState } from "react";
import { ApolloProvider, useMutation } from "@apollo/client";
import client from "./ApolloClient";
import { ADD_BOOKING } from "./graphql";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  const [addBooking] = useMutation(ADD_BOOKING);
  const [formData, setFormData] = useState({ name: "", destination: "", date: "", price: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking({ variables: { ...formData, price: parseFloat(formData.price) } });
    setFormData({ name: "", destination: "", date: "", price: "" });
  };

  return (
    <div
      style={{
        backgroundImage: "url('booking_image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="booking-container">
        <h2 className="headiing">Travel Booking System</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          <input type="text" placeholder="Destination" value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} required />
          <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
          <input type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
          <button type="submit">Add Booking</button>
          <button onClick={() => navigate("/bookings")}>Fetch Bookings</button>
        </form>
      </div>
    </div>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </Router>
  </ApolloProvider>
);