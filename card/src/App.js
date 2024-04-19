import React from 'react';
import './App.css'; // Import the CSS file for styling

const Card = () => {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg"
        alt="Placeholder"
      />
      <div className="card-content">
        <h3 className="card-title">Card Title</h3>
        <p className="card-description">
        "Simple Card Design with React"
        </p>
      </div>
    </div>
  );
};

export default Card;
