import React, { useState } from 'react';
import '../css/ContactForm.css';

const ContactForm = () => { // This component is used to render the contact form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

  const handleSubmit = (e) => { // This function is called when the form is submitted
    e.preventDefault();
    console.log('Form submitted:', { name, email, message, subscribeNewsletter });
    setName('');
    setEmail('');
    setMessage('');
    setSubscribeNewsletter(false);
  };

  return (  
    <div className="contact-container">
      <h2>Contact Information</h2>
      <p>Email: <a href="mailto:tecgaurd@store.com" target="_blank" rel="noopener noreferrer">tecgaurd@store.com</a></p>
      <p>Phone: <a href="tel:+995599333333">+995 599 333 333</a></p>
      <p>Address: <a href="https://maps.google.com/?q=Marjanishvili St, Tbilisi, 0001" target="_blank" rel="noopener noreferrer">Marjanishvili St, Tbilisi, 0001</a></p>
      <h2>Contact Us Directly</h2>
      <form onSubmit={handleSubmit}> 
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={subscribeNewsletter}
              onChange={(e) => setSubscribeNewsletter(e.target.checked)}
            />
            Subscribe to Newsletter
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;