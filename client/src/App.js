import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import MovieList from "./components/MovieList";
import Login from "./components/Login";
import SeatSelection from "./components/SeatSelection";
import "./App.css";  

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  if (loading) {
    return <div className="loading-screen">Loading...</div>; 
  }

  return (
    <Router>
      <div className="app-container">
        {/* Navbar stays at the top for navigation */}
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

          {/* Only allow authenticated users to access Movies */}
          <Route path="/movies" element={isAuthenticated ? <Movies /> : <Navigate to="/login" />} />

          {/* Dynamic route for MovieList based on selected language */}
          <Route path="/movies/:language" element={isAuthenticated ? <MovieList /> : <Navigate to="/login" />} />
          <Route path="/movies/:language/:id/seats" element={<SeatSelection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
