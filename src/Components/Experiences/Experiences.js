import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import './Experiences.css';

const Experiences = () => {
  const experiences = [
    {
      name: "Full Stack Developer",
      role: "MERN Stack Developer",
      location: "LPU, Punjab",
      technologies: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Vite",
      projects: "Alumni Association Platform, MERN Vendor Manager System, Online Election Voting System.",
      duration: "2024 - Present",
      description: "As a Full Stack Developer specializing in the MERN stack, I have built scalable and responsive web applications with complete authentication systems, CRUD operations, and deployment-ready architectures. My work includes developing the Alumni Association Platform with features like alumni registration, donation portals, networking hubs, and job portals, as well as the MERN Vendor Manager System featuring vendor data management and backend API integration. I also created an Online Election Voting System with secure voting and real-time result visualization. I focus on writing clean, maintainable code and deploying applications on platforms like Render and Vercel."
    }
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation triggers once when scrolled into view
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  // Helper function to apply AOS animations with delay
  const getAosData = (animation, delay) => ({
    "data-aos": animation,
    "data-aos-delay": delay,
  });

  return (
    <div className="experiences">
      <div id="experiences_heading" className="academics_content1">
        <div style={{ display: 'inline' }} id="academics_content">
          <h1 className="academics_heading" {...getAosData('fade-up', 0)}>Experiences</h1>
        </div>
      </div>
      <div className="experiences_container">
        {experiences.map((experience, index) => {
          return (
            <div
              id="experiences_item"
              className="academic_item"
              {...getAosData('fade-up', index * 200)} // Adding delay based on index for staggered animation
              key={index}
            >
              <div className="academic_left">
                {/* Company Name */}
                <h1 className="academic_name" {...getAosData('fade-left', 0)}>{experience.name}</h1>
                {/* Role */}
                <h1 className="academic_name" {...getAosData('fade-left', 100)}>{experience.role}</h1>
                {/* Location */}
                <h3 className="academic_location" {...getAosData('fade-left', 200)}>( {experience.location} )</h3>
                {/* Technologies */}
                <h3 className="project_item_technologies" {...getAosData('fade-left', 300)}>
                  <span className="project_item_technologies1">Technologies Used: </span>{experience.technologies}
                </h3>
                {/* Projects Worked */}
                <h3 className="project_item_technologies" {...getAosData('fade-left', 400)}>
                  <span className="project_item_technologies1">Projects Worked: </span>{experience.projects}
                </h3>
              </div>
              <div className="academic_right">
                {/* Duration */}
                <h1 className="academic_duration" {...getAosData('fade-right', 100)}>{experience.duration}</h1>
                {/* Description */}
                <h3 className="academic_explanation" {...getAosData('fade-right', 200)}>{experience.description}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experiences;
