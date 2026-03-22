import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import './Projects.css';
import project1 from '../../Images/project/project1.svg';
import project2 from '../../Images/project/project2.svg';
import project3 from '../../Images/project/project3.svg';
import aluminiPort from '../../Images/project/alumini_port.png';
import vendorPort from '../../Images/project/vendor_port.png';
import eVote from '../../Images/project/e-vote.png';

const Projects = ({ pro }) => {
  const projects = (!pro) ? [
    {
      name: "Alumni Association Platform",
      date_uploaded: "2024",
      technologies: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
      description: "A comprehensive Alumni Association Platform built with the MERN stack featuring alumni registration, donation portal, networking hub, job portal, events & reunions management, feedback & surveys system, and a complete authentication system. The platform connects alumni with their institution and fellow graduates.",
      image: aluminiPort,
      github: "https://github.com/Mahendra58",
      live: "https://alumni-fusion-c3lg.vercel.app/"
    },
    {
      name: "MERN Vendor Manager System",
      date_uploaded: "2024",
      technologies: "React.js, Node.js, Express.js, MongoDB",
      description: "A full-stack Vendor & Purchase Order Manager System with CRUD operations, authentication, vendor data management, backend API integration, and deployment-ready structure. Features include dashboard analytics, delivery tracking, and invoice management.",
      image: vendorPort,
      github: "https://github.com/Mahendra58",
      live: "https://vendor-and-purchase-order-manager.onrender.com/"
    },
    {
      name: "Online Election Voting System",
      date_uploaded: "2024",
      technologies: "HTML, CSS, Tailwind CSS, JavaScript, PHP, JSON",
      description: "A secure Online Election Voting System with one-time vote enforcement, candidate management, and real-time result visualization. Built with a focus on security and user experience to ensure fair and transparent elections.",
      image: eVote,
      github: "https://github.com/Mahendra58",
      live: "#"
    },

  ] : pro;
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
    <div>
      <div className="academics_content1" id="projects_heading">
        <div style={{ display: 'inline' }} id="academics_content">
          <h1 {...getAosData("fade-left", 0)} className="academics_heading">Projects</h1>
        </div>
      </div>
      <div className="projects_content4">
        <div className="projects_content2">
          {projects.map((project, index) => {
            return (
              <div className="project_nn">
                <div className="project_item" {...getAosData("fade-up", 200)} key={index}>
                  {/* Project Image */}
                  <img src={project.image} className="project-image" alt="Project" />

                  {/* Project Title */}
                  <h1 className="project_item_name" {...getAosData("fade-left", 0)}>{project.name}</h1>

                  {/* Project Date */}
                  <h1 className="project_item_duration" {...getAosData("fade-left", 100)}>{project.date_uploaded}</h1>

                  {/* Project Technologies */}
                  <h3 className="project_item_technologies" {...getAosData("fade-up", 200)}>
                    <span className="project_item_technologies1">Technologies Used : </span>{project.technologies}
                  </h3>

                  {/* Project Description */}
                  <h3 className="project_item_description" {...getAosData("fade-up", 300)}>{project.description}</h3>

                  {/* Project Links */}
                  <div className="project_item_links" {...getAosData("fade-up", 400)}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project_item_links1">
                      Github
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project_item_links1">
                      Live
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project_item_links1">
                      Show More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Projects Button */}
        {!pro ?
          <div className="projects_content3">
            <a href="/projects" className="projects_content_btn">Show more Projects</a>
          </div>
          : null
        }
      </div>
    </div>
  );
};

export default Projects;
