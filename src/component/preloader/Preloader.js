import React, { useState, useEffect } from "react";
import "./Preloader.css"; // Assuming you have styles for the preloader

const Preloader = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 5;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 30); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="main-preloader" className="main-preloader semi-dark-background">
      <div className="main-preloader-inner center">
        <h1 className="preloader-percentage center">
          <span className="preloader-percentage-text">{percentage}</span>
          <span className="percentage">%</span>
        </h1>
        <div className="preloader-bar-outer">
          <div
            className="preloader-bar"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
