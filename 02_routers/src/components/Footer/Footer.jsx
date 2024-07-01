import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <NavLink exact to="/" className="nav-link">Home</NavLink>
              </li>
              <li>
                <NavLink to="/features" className="nav-link" >Features</NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="nav-link" >Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link" >About</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Useful Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/privacy" className="nav-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="nav-link">Terms of Service</Link>
              </li>
              <li>
                <Link to="/support" className="nav-link">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Company Name
      </div>
    </footer>
  );
}

export default Footer;
