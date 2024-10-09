import React from 'react';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name="Contact">
      <div
        className="container-fluid contact text-center"
        style={{ paddingTop: '50px', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div
          className="aboutinner bg-opacity-80 p-4 text-white"
          style={{ height: '70%', width: '100%', maxWidth: '600px', margin: '0 auto', borderRadius: '10px' }}
        >
          <h1>Contact Us</h1>
        
          <div className="mb-2">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control bg-light border-primary" id="name" required />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control bg-light border-primary" id="email" required />
          </div>
          <div className="mb-2">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control bg-light border-primary" id="message" rows="2" required />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
