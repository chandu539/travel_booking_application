import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKINGS } from "./graphql";
import { useNavigate } from "react-router-dom";
import "./Booking.css"; 

const Bookings = () => {
  const { loading, error, data } = useQuery(GET_BOOKINGS);
  const navigate = useNavigate();

  if (loading) return <p className="loading-message">Loading bookings...</p>;
  if (error) return <p className="error-message">Error fetching bookings: {error.message}</p>;

  return (
    <div 
    style={{
        backgroundImage: "url('fetch_bg_image.jpg')",
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
        className="bookings-container"
        >
            
      <h2 className="bookings-title">All Bookings</h2>
      <button className="back-button" onClick={() => navigate("/")}>Back</button>
      <div className="bookings-list">
        {data.getBookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <p className="booking-detail"><strong>Name:</strong> {booking.name}</p>
            <p className="booking-detail"><strong>Destination:</strong> {booking.destination}</p>
            <p className="booking-detail"><strong>Date:</strong> {booking.date}</p>
            <p className="booking-detail"><strong>Price:</strong> ${booking.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
