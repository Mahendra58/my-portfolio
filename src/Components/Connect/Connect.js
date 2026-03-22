import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import image from "../../Images/connectwithme.png";
import './Connect.css';

const Connect = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    const mailtoLink = `mailto:mahendrasinghbarod569@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="connect_container">
      <div className="academics_content1" id="connect_heading" {...getAosData('fade-up', 0)}>
        <div style={{ display: 'inline' }} id="academics_content">
          <h1 className="academics_heading">Connect with me</h1>
        </div>
      </div>
      
      <div className="connect_container2">
        <img 
          src={image} 
          className="connect-image" 
          alt="connect image" 
          {...getAosData('fade-left', 100)}
        />

        <form className="connect_form" onSubmit={handleSubmit}>
          <h1 className="connect_input_label" {...getAosData('fade-up', 200)}>Name</h1>
          <input 
            type="text" 
            placeholder="Enter your Name" 
            className="connect_input" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            {...getAosData('fade-up', 300)}
          />
          
          <h1 className="connect_input_label" {...getAosData('fade-up', 400)}>Email</h1>
          <input 
            type="email" 
            placeholder="Enter your Email" 
            className="connect_input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            {...getAosData('fade-up', 500)}
          />
          
          <h1 className="connect_input_label" {...getAosData('fade-up', 600)}>Message</h1>
          <textarea 
            placeholder="Write your Message" 
            id="connect_textarea" 
            className="connect_input" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            {...getAosData('fade-up', 700)}
          />
          
          <button 
            type="submit"
            className="connect_button" 
            {...getAosData('fade-up', 800)}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

// Helper function to apply AOS data attributes with delay
const getAosData = (animation, delay) => ({
  "data-aos": animation,
  "data-aos-delay": delay, // Delay in milliseconds
});

export default Connect;
