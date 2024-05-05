import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';  


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          {/* Lordicon animation */}
          <lord-icon
            src="https://cdn.lordicon.com/osckrizz.json"
            trigger="loop"
colors="primary:#ffffff,secondary:#cb5eee"
            style={{ width: '50px', height: '50px', marginRight: '10px' }}>
          </lord-icon>
          <a className="navbar-brand" href="#">AstroData</a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
            <Link className="nav-link" to="/nasa-images">NASA Images</Link>
            <Link className="nav-link" to="/mars-rover-photos">Mars Rover Photos</Link>
            <Link className="nav-link" to="/apod">Astronomy Picture of the Day</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
