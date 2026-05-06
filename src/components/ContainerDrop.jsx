import React from 'react';
import { motion } from 'framer-motion';
import containerImg from '../assets/container.jpg';
import './ContainerDrop.css';

const ContainerDrop = ({ delay = 0 }) => {
  return (
    <div className="container-drop-container">
      {/* Rope / Cable - Attached to the container */}
      <motion.div 
        className="rope"
        initial={{ height: 0 }}
        whileInView={{ height: '400px' }}
        viewport={{ once: true }}
        transition={{ 
          delay: delay + 0.2,
          type: 'spring',
          damping: 15,
          stiffness: 70
        }}
      />

      {/* Container Box */}
      <motion.div
        className="container-box-wrapper"
        initial={{ y: -600 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          y: {
            delay: delay + 0.2,
            type: 'spring',
            damping: 15,
            stiffness: 70,
            bounce: 0.4
          }
        }}
      >
        <motion.div 
          className="container-image-box"
          animate={{ 
            rotate: [0, -1, 1, -0.5, 0.5, 0],
          }}
          transition={{
            delay: delay + 1.2,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img src={containerImg} alt="Shipping Container" className="container-image" />
          <div className="container-overlay">PNX GLOBAL</div>
        </motion.div>
        
        {/* Shadow */}
        <motion.div 
          className="container-shadow"
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.6, duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
};

export default ContainerDrop;
