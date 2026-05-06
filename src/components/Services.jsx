import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Truck, Globe, FileCheck, ShieldCheck, Headphones } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Ship size={40} />,
    title: 'Ocean Freight',
    description: 'Comprehensive sea freight solutions for both FCL and LCL shipments across all major global ports.'
  },
  {
    icon: <Truck size={40} />,
    title: 'Land Transport',
    description: 'Reliable door-to-door delivery with our extensive network of land logistics and trucking services.'
  },
  {
    icon: <Globe size={40} />,
    title: 'Export/Import',
    description: 'Connecting India to global markets with specialized handling of diverse product categories.'
  },
  {
    icon: <FileCheck size={40} />,
    title: 'Customs Clearance',
    description: 'Expert handling of documentation and regulatory compliance to ensure smooth border transitions.'
  },
  {
    icon: <ShieldCheck size={40} />,
    title: 'Warehousing',
    description: 'Secure, temperature-controlled storage solutions for your valuable goods at strategic locations.'
  },
  {
    icon: <Headphones size={40} />,
    title: '24/7 Support',
    description: 'Dedicated account managers providing real-time tracking and constant communication.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="services-header">
          <h4 className="section-subtitle">Our Expertise</h4>
          <h2 className="section-title">Comprehensive Trade Solutions</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ translateY: -10 }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-border"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
