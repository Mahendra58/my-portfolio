import { useEffect, useRef, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Projects from '../../Components/Projects/Projects';
import project1 from '../../Images/project/project1.svg';
import project2 from '../../Images/project/project2.svg';
import project3 from '../../Images/project/project3.svg';
import aluminiPort from '../../Images/project/alumini_port.png';
import vendorPort from '../../Images/project/vendor_port.png';
import eVote from '../../Images/project/e-vote.png';
import { Helmet } from 'react-helmet';

const Home = () => {
  const projects = [
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
    }
  ];



  return (
    <>
      <Helmet>
        <text>Projects</text>
        <meta type="description" content="A list of Projects I have made and worked on." />
        <meta type="keywords" content="Projects, Mahendra Singh, MERN Stack, Full Stack Developer" />
      </Helmet>
      <div className="home">
        <Projects pro={projects} />
      </div>
    </>

  );
}

export default Home;
