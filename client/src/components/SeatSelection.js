import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SeatSelection.css";

const SeatSelection = () => {
  const { language, id } = useParams();
  const navigate = useNavigate();
  const totalSeats = 30;

  // Generate random availability for seats
  const generateSeats = () => {
    return Array.from({ length: totalSeats }, () => Math.random() > 0.3); // 70% available
  };

  const [seats, setSeats] = useState(generateSeats());
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (index) => {
    if (seats[index]) {
      setSelectedSeats((prev) =>
        prev.includes(index) ? prev.filter((seat) => seat !== index) : [...prev, index]
      );
    }
  };

  const confirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert("❌ Please select at least one seat before proceeding.");
      return;
    }

    const bookingID = `BMS-${Math.floor(100000 + Math.random() * 900000)}`;

    alert(
      `🎟 Booking Reserved!\n\n✅ Booking ID: ${bookingID}\n\n📩 A payment link has been sent to your registered email.\n⏳ Please complete the payment within the next 30 minutes to confirm your booking.\n\nThank you for choosing Book My Show! Enjoy your movie! 🍿`
    );

    // Navigate back to movies page
    navigate(`/movies/${language}`);
  };

  return (
    <div className="seat-selection-container">
      <h2 style={{ color: "white" }}>Select Seats</h2>
      <div className="screen">SCREEN</div>
      <div className="seat-grid">
        {seats.map((isAvailable, index) => (
          <button
            key={index}
            className={`seat ${isAvailable ? "available" : "unavailable"} ${
              selectedSeats.includes(index) ? "selected" : ""
            }`}
            onClick={() => toggleSeatSelection(index)}
            disabled={!isAvailable}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button className="confirm-btn" onClick={confirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default SeatSelection;
