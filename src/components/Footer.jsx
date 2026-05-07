import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Ship } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container footer-grid">
        <div className="footer-brand">
          <div className="logo-text">PNX <span>GLOBAL</span></div>
          <p className="brand-description">
            Your trusted partner in global trade and exports. Connecting India to the world with excellence and reliability since 2014.
          </p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#exports">Exports</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Ocean Freight</a></li>
            <li><a href="#">Land Transport</a></li>
            <li><a href="#">Customs Clearance</a></li>
            <li><a href="#">Warehousing</a></li>
            <li><a href="#">Trade Consulting</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to get the latest trade news and updates.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="section-container bottom-content">
          <p>&copy; 2026 PNX Global Exports. All Rights Reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
