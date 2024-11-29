import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">Elegance for your web app</h1>
            <p className="Head">
              Standard, modern, and elegant solution for your next web app so you don't have to look further. Sign up or check the demo below.
            </p>
            <button className="btn btn-primary me-3">Sign Up</button>
            <button className="btn btn-outline-primary">Check Demo</button>
          </div>

         
          <div className="col-md-6">
            <img
              src="Capture.PNG"
              className="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
