import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="welcome-heading">
        🎭 Welcome to <span className="highlight">Book My Show!</span>
      </h1>
      <div className="options">
        <button onClick={() => navigate("/movies")} className="active-button">🎬 Book Movies</button>
        <button className="disabled-button">🎟 Book Events</button>
        <button className="disabled-button">🎤 Book Live Shows</button>
      </div>
    </div>
  );
};

export default Home;
