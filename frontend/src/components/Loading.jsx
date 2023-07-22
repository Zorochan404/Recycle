import React, { useEffect } from 'react';
import earth from '../assets/earth.gif'
import '../assets/styles/Welcome.css'






function Loading() {
  useEffect(() => {
    // Wait for 3 seconds and then redirect to the home page
    setTimeout(() => {
      window.location.href = '/home'; // Replace '/home' with the actual path of your home page
    }, 5000);
  }, []);

  return (
    <div className="body">
    <div className="loading-container">
      <img src={earth} alt="Loading..." className="loading-image"/>
    </div>
    </div>
  );
}

export default Loading;
