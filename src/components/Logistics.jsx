import React from 'react';
import { motion } from 'framer-motion';
import ContainerDrop from './ContainerDrop';
import truckImg from '../assets/truck.jpg';
import './Logistics.css';

const Logistics = () => {
  return (
    <section id="logistics" className="logistics-section">
      <div className="section-container">
        <div className="logistics-header">
          <h4 className="section-subtitle">Global Network</h4>
          <h2 className="section-title">We Move Anything, Anywhere</h2>
        </div>

        <div className="logistics-grid">
          <div className="logistics-text">
            <p className="highlight-text">
              Our logistical framework is designed for maximum efficiency and minimum risk. We operate across 6 continents, ensuring your goods are tracked from origin to destination.
            </p>
            
            <div className="logistics-features">
              <div className="feat-item">
                <span className="dot"></span>
                <p>Real-time vessel tracking and updates</p>
              </div>
              <div className="feat-item">
                <span className="dot"></span>
                <p>Optimized trade routes for faster delivery</p>
              </div>
              <div className="feat-item">
                <span className="dot"></span>
                <p>Secure packaging and premium insurance</p>
              </div>
              <div className="feat-item">
                <span className="dot"></span>
                <p>Multi-modal transport solutions</p>
              </div>
            </div>

            <div className="map-placeholder">
              {/* This would be an animated world map in a real scenario */}
              <div className="map-animation">
                <div className="pulse-point" style={{ top: '40%', left: '70%' }}></div>
                <div className="pulse-point" style={{ top: '50%', left: '30%' }}></div>
                <div className="pulse-point" style={{ top: '60%', left: '80%' }}></div>
                <div className="pulse-point" style={{ top: '30%', left: '20%' }}></div>
              </div>
              <img src={truckImg} alt="Logistics Network" className="map-static-img" />
            </div>
          </div>

          <div className="logistics-animation">
            <h3 className="anim-label">Loading in Progress...</h3>
            <ContainerDrop delay={0.2} />
            <div style={{ height: '50px' }}></div>
            <ContainerDrop delay={0.8} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
