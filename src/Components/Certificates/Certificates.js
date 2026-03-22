import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      date: "Aug’ 2022",
      link: "/certificates/nptel.jpg"
    },
    {
      name: "Mastering DSA with C++",
      issuer: "FIFTH FORCE",
      date: "Mar’ 2021",
      link: "/certificates/fifth-force.png"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const getAosData = (animation, delay) => ({
    "data-aos": animation,
    "data-aos-delay": delay,
  });

  return (
    <div className="certificates">
      <div className="academics_content1 certificates_gradient_header">
        <div style={{ display: 'inline' }} id="academics_content">
          <h1 {...getAosData("fade-left", 0)} className="academics_heading">Certificates</h1>
        </div>
      </div>

      <div className="certificates_container">
        {certificates.map((cert, index) => (
          <div className="certificate_card" {...getAosData("fade-up", index * 100)} key={index}>
            <div className="certificate_header">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#00A2E8" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="certificate_icon"
              >
                <circle cx="12" cy="8" r="6"></circle>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
              </svg>
              <h3 className="certificate_name">{cert.name}</h3>
            </div>
            
            <div className="certificate_details">
              <p className="certificate_issuer">
                <span className="issuer_label">Issued by: </span>
                <span className="issuer_name">{cert.issuer}</span>
              </p>
              <p className="certificate_date">{cert.date}</p>
            </div>

            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate_link">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
