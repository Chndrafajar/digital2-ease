import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaWifi } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src="/logo/logo-nav.png" alt="" className="logo" />
            <p>Digital2Ease is and digital marketplace platform solution for who want to sell digital goods for easy</p>
            <div className="sosialIcons">
              <img src="/icons/ig.svg" alt="" />
              <img src="/icons/facebook.svg" alt="" />
              <img src="/icons/linkedin.svg" alt="" />
              <img src="/icons/twitter.svg" alt="" />
              <img src="/icons/pinterest.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-2">
            <h2>Quick Links</h2>
            <div className="menu">
              <span>Home</span>
              <span>Blog</span>
              <span>Shops</span>
              <span>Help Center</span>
            </div>
          </div>
          <div className="col-lg-2">
            <h2>Information</h2>
            <div className="menu">
              <NavLink to="/terms-condition" className="link">
                Terms and Condition
              </NavLink>
              <NavLink to="/privacy" className="link">
                Privacy Policy
              </NavLink>
              <NavLink to="/about" className="link">
                About
              </NavLink>
            </div>
          </div>
          <div className="col-lg-3">
            <h2>Follow Us</h2>
            <div className="menu">
              <span>
                <FaWifi />
              </span>
            </div>
            <div className="new-letter">
              <h2>Newsletter</h2>
              <div className="input-subscribe">
                <input type="email" placeholder="enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <div className="container">
          <h3>Copyright © 2023 Digital2 Ease. All rights reserved.</h3>
          <div className="icons-payment">
            <div className="icons-pay-item">
              <img src="/logo/paypal.png" alt="" />
            </div>
            <div className="icons-pay-item">
              <img src="/logo/visa.png" alt="" />
            </div>
            <div className="icons-pay-item">
              <img src="/logo/master-card-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
