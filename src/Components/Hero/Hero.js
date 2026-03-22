import './Hero.css';
import React, { useEffect, useState } from 'react';

import profilepic from '../../Images/my-formal-photo.jpeg';
import resume from '../../Images/resume.svg';
import linkedin from '../../Images/linkedin.svg';
import github from '../../Images/github.svg';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles

const Hero = () => {
  const fullText = "Student @ Lovely Professional University";
  const [displayText, setDisplayText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    // Initialize AOS with custom settings
    AOS.init({
      duration: 1200,
      once: true,
      startEvent: 'DOMContentLoaded',
      easing: 'ease-out-cubic',
    });
  }, []);

  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingDone(true);
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  // Helper function to conditionally apply AOS animations with delay
  const getAosData = (animation, delay) => ({
    "data-aos": animation,
    "data-aos-delay": delay, // Delay in milliseconds
  });

  return (
    <div className="hero">
      <img  {...getAosData("fade-left", 0)} src={profilepic} className="profile-pic" alt="Profile" />
      <div id="hero1" className="hero__content">
        {/* Hero Name with AOS Animation */}
        <div {...getAosData("fade-up", 0)} className="hero_name">
          <h1 className="hero_name1">MAHENDRA SINGH</h1>
          <h3 className="hero_name2">B.Tech CSE/IT</h3>
        </div>

        {/* Education Section with Typing Animation */}
        <div {...getAosData("fade-up", 100)} className="hero_education">
          <h1 className={`hero_education1${isTypingDone ? ' typing-done' : ''}`}>{displayText}</h1>
        </div>

        {/* About Section with AOS Animation */}
        <div {...getAosData("fade-up", 200)} className="hero_about">
          <h1 className="hero_about1">
            I am a passionate Full Stack Developer specializing in the MERN stack, with a strong focus on building scalable, responsive, and deployment-ready web applications. As a B.Tech CSE/IT student at Lovely Professional University (2027 batch), I actively apply my knowledge of React.js, Node.js, Express.js, and MongoDB to create real-world projects featuring authentication systems, CRUD operations, and modern UI/UX design. I am committed to continuous learning, improving my technical skills, and becoming an industry-ready Full Stack Developer.
          </h1>
        </div>

        {/* Links Section with AOS Animation */}
        <div {...getAosData("fade-up", 300)} className="hero_links">
          <div className="hero_link_btn">
            <img src={resume} className="hero_link_btn_img" alt="Resume" />
            <a className="hero_link_btn_text" href="/Mahendra_Resume.pdf" target="_blank" rel="noopener noreferrer" download="Mahendra_Singh_Resume.pdf">Resume</a>
          </div>
          <div className="hero_link_btn1">
            <a href="https://www.linkedin.com/in/mahendra-singh-barod" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="hero_link_btn_img1" alt="LinkedIn" /></a>
            <a href="https://github.com/Mahendra58" target="_blank" rel="noopener noreferrer"><img src={github} className="hero_link_btn_img1" alt="GitHub" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
