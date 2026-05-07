import React from 'react';
import { motion } from 'framer-motion';
import ContainerDrop from './ContainerDrop';
import shipImg from '../assets/ship.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img src={shipImg} alt="Shipping" className="hero-bg-image" />
      </div>
      
      <div className="section-container hero-content">
        <div className="hero-text-area">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Connecting <span className="highlight">India</span> to the World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-tagline"
          >
            Reliable Global Trade Solutions. Seamless Exports. Guaranteed Satisfaction.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-ctas"
          >
            <button className="btn-primary-filled">Our Services</button>
            <button className="btn-secondary-outline">Contact Us</button>
          </motion.div>
        </div>

        <div className="hero-animation-area">
          <ContainerDrop delay={0.6} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
