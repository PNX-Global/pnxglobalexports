import React from 'react';
import { motion } from 'framer-motion';
import shipImg from '../assets/ship.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container about-grid">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-image-area"
        >
          <div className="image-stack">
            <img src={shipImg} alt="Shipping" className="img-main" />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-text-area"
        >
          <h4 className="section-subtitle">Who We Are</h4>
          <h2 className="section-title">Your Trusted Partner in Global Trade</h2>
          <p className="about-description">
            At <strong>PNX Global Exports</strong>, we bridge the gap between Indian manufacturers and the global market. Based in India, we specialize in the seamless export of premium goods, ensuring that quality reaches every corner of the world.
          </p>
          <p className="about-description">
            With a decade of experience in logistics and trade compliance, we handle the complexities so you can focus on growth. From sourcing to final delivery, our commitment to reliability and excellence is unwavering.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Shipments Handled</p>
            </div>
            <div className="stat-item">
              <h3>99%</h3>
              <p>On-Time Delivery</p>
            </div>
          </div>

          <button className="btn-primary">Learn More About Us</button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
