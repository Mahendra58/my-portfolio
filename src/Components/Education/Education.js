import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      degree: "Lovely Professional University, Punjab",
      year: "2023 – 2027",
      status: "Computer Science and Engineering — CGPA: 6.91 | Phagwara, Punjab",
    },
    {
      degree: "Himalaya International School",
      year: "2021 – 2022",
      status: "12th with Science — Percentage: 64% | Ratlam, Madhya Pradesh",
    },
    {
      degree: "Himalaya International School",
      year: "2019 – 2020",
      status: "10th with Science — Percentage: 79% | Ratlam, Madhya Pradesh",
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
    <div className="education">
      <div className="academics_content1 education_gradient_header">
        <div style={{ display: 'inline' }} id="academics_content">
          <h1 {...getAosData("fade-left", 0)} className="academics_heading">Education</h1>
        </div>
      </div>

      <div className="education_container">
        {educationList.map((edu, index) => (
          <div className="education_card" {...getAosData("fade-up", index * 100)} key={index}>
            <h3 className="education_degree">
              {edu.degree} <span className="education_year">— {edu.year}</span>
            </h3>
            {edu.status && (
              <p className="education_status">{edu.status}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
