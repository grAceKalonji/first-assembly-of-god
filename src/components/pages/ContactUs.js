import React, { useState }  from 'react'
import "../ContactUs.css"
import emailjs from 'emailjs-com';

function ContactUs() {   

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const templateParams = {
        email,
        message,
      };
    
      emailjs
        .send(
          'service_kebdwqj',  // Replace with your EmailJS service ID
          'template_h8b9sr7', // Replace with your EmailJS template ID
          templateParams,
          'grace'      // Replace with your EmailJS user ID
        )
        .then((response) => {
          alert('Message sent successfully!');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          alert('Failed to send message, please try again later.');
          console.error('EmailJS error:', error);
        });
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
