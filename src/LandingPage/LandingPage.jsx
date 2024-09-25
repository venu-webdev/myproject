import React from 'react';
import './LandingPage.css';
import homeImage from  '../assests/home1.jpg'// Add your CSS styles here

 // Assuming the image is in src/assets folder

const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-page">
      <h1>Transform your body</h1>
      <button className="get-started-button" onClick={onStart}>Get Started</button>
    </div>
  );
};

export default LandingPage;
