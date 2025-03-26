import React from "react";
import { useNavigate } from "react-router-dom";
import "./Movies.css";

const Movies = () => {
  const navigate = useNavigate();

  const handleLanguageSelection = (language) => {
    navigate(`/movies/${language}`);
  };

  return (
    <div className="movies-container">
      <h2>Select a Language</h2>
      <div className="language-options">
        <button onClick={() => handleLanguageSelection("English")}>English</button>
        <button onClick={() => handleLanguageSelection("Hindi")}>Hindi</button>
        <button onClick={() => handleLanguageSelection("Japanese")}>Japanese</button>
      </div>
    </div>
  );
};

export default Movies;
