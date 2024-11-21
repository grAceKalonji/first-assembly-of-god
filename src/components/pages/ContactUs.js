import React, { useState }  from 'react'
import "../ContactUs.css"

function ContactUs() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission logic here
      alert('Message sent! We will get back to you soon.');
      setEmail('');
      setMessage('');
    };
  return (
    <div className= "ContactUsContainer">
      <h1> Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your email address"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Your message"
        ></textarea>

        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default ContactUs
