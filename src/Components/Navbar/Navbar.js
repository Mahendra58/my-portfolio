import "./Navbar.css";
import React, { useEffect } from 'react';

import { Link as ScrollLink } from 'react-scroll';
import { scroller } from 'react-scroll';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles
import home from '../../Images/navbar/home.svg';
import academics from '../../Images/navbar/academics.svg';
import projects from '../../Images/navbar/projects.svg';
import experiences from '../../Images/navbar/experience.svg';
import skills from '../../Images/navbar/skills.svg';

import connect from '../../Images/navbar/connect.svg';


const Navbar = ({ activeSection }) => {
    useEffect(() => {
        // Initialize AOS with custom settings
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Ensures the animation triggers only once when it comes into view
            startEvent: 'DOMContentLoaded', // Trigger AOS when the DOM is loaded
            easing: 'ease-in-out', // Easing function for the animations
        });
    }, []);

    // Helper function to conditionally apply AOS animations with delay
    const getAosData = (animation, delay) => ({
        "data-aos": animation,
        "data-aos-delay": delay, // Delay in milliseconds
    });


    return (
        <div className="navbar">
            <div id="navbar-desktop" className="navbar" style={{ position: 'fixed', marginTop: "-20px" }} {...getAosData("zoom-in", 0)} >
                <div className="navbar__links">
                    <ScrollLink
                        className={`navbar-link ${activeSection === "hero" ? "active" : ""}`}
                        to="hero123"
                        smooth={true}
                        duration={1000}
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        className={`navbar-link ${activeSection === "academics" ? "active" : ""}`}
                        to="academics"
                        smooth={true}
                        duration={1000}
                    >
                        Academics
                    </ScrollLink>
                    <ScrollLink
                        className={`navbar-link ${activeSection === "projects" ? "active" : ""}`}
                        to="projects"
                        smooth={true}
                        duration={1000}
                    >
                        Projects
                    </ScrollLink>
                    <ScrollLink
                        className={`navbar-link ${activeSection === "experiences" ? "active" : ""}`}
                        to="experiences"
                        smooth={true}
                        duration={1000}
                    >
                        Experiences
                    </ScrollLink>
                    <ScrollLink
                        className={`navbar-link ${activeSection === "skills" ? "active" : ""}`}
                        to="skills"
                        smooth={true}
                        duration={1000}
                    >
                        Skills
                    </ScrollLink>

                    <ScrollLink
                        className={`navbar-link ${activeSection === "connect" ? "active" : ""}`}
                        to="connect"
                        smooth={true}
                        duration={1000}
                    >
                        Connect
                    </ScrollLink>
                </div>
            </div>
            <div id="navbar-mobile">
                <div id="nav-mobile" className="navbar" style={{ position: 'fixed', marginTop: "-20px" }} {...getAosData("zoom-in", 0)} >
                    <div className="navbar__links">
                        <ScrollLink
                            className={`navbar-link ${activeSection === "hero" ? "active" : ""}`}
                            to="hero123"
                            smooth={true}
                            duration={1000}
                        >
                            <img src={home} alt="Home" />
                        </ScrollLink>
                        <ScrollLink
                            className={`navbar-link ${activeSection === "academics" ? "active" : ""}`}
                            to="academics"
                            smooth={true}
                            duration={1000}
                        >
                            <img src={academics} alt="Academics" />
                        </ScrollLink>
                        <ScrollLink
                            className={`navbar-link ${activeSection === "projects" ? "active" : ""}`}
                            to="projects"
                            smooth={true}
                            duration={1000}
                        >
                            <img src={projects} alt="Projects" />
                        </ScrollLink>
                        <ScrollLink
                            className={`navbar-link ${activeSection === "experiences" ? "active" : ""}`}
                            to="experiences"
                            smooth={true}
                            duration={1000}
                        >
                            <img src={experiences} alt="Experiences" />
                        </ScrollLink>
                        <ScrollLink
                            className={`navbar-link ${activeSection === "skills" ? "active" : ""}`}
                            to="skills"
                            smooth={true}
                            duration={1000}
                        >
                            <img src={skills} alt="Skills" />
                        </ScrollLink>

                        <ScrollLink
                            className={`navbar-link ${activeSection === "connect" ? "active" : ""}`}
                            to="connect"
                            smooth={true}
                            duration={1000}
                        >
                            <img src={connect} alt="Connect" />
                        </ScrollLink>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Navbar;
