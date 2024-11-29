import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Medical App</a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
        <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
      </ul>
      <button className="btn btn-outline-primary me-2">Sign In</button>
      <button className="btn btn-primary">Sign Up</button>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
