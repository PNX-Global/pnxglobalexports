import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info-area"
          >
            <h4 className="section-subtitle">Get In Touch</h4>
            <h2 className="section-title">Ready to Start Your Global Journey?</h2>
            <p className="contact-intro">
              Whether you're looking to export products from India or need a reliable export partner, we're here to help. Reach out to us for a free consultation.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <div className="icon-box"><Phone size={24} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 6303509254</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="icon-box"><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>pnxglobalexports@gmail.com</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="icon-box"><MapPin size={24} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Hyderabad, India | Global Presence</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-area"
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Inquiry about..." required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
