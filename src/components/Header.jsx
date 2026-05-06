import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, Ship, Truck, Phone, Mail } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Logistics', href: '#logistics' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`glass-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-top-bar">
        <div className="section-container nav-top-content">
          <div className="contact-info">
            <span><Phone size={14} /> 6303509254</span>
            <span><Mail size={14} /> pnxglobalexports@gmail.com</span>
          </div>
          <div className="location-info">
            <span><Globe size={14} /> India | Global Network</span>
          </div>
        </div>
      </div>
      
      <div className="section-container nav-main-content">
        <div className="logo-container">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="logo-text"
          >
            PNX <span>GLOBAL</span>
          </motion.div>
        </div>

        {/* Desktop Nav */}
        <ul className="desktop-nav">
          {navLinks.map((link, i) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
          <li>
            <button className="btn-primary">Track Shipment</button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        className={`mobile-nav ${isOpen ? 'open' : ''}`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween' }}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setIsOpen(false)}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li>
            <button className="btn-primary">Track Shipment</button>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Header;
