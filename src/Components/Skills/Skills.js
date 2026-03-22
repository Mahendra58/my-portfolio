import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import './Skills.css';

const Skill = () => {
  const skills = [
    {
      heading: "Programming",
      tools: [
        "C++",
        "JavaScript",
        "HTML",
        "CSS"
      ]
    },
    {
      heading: "Frontend",
      tools: [
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "Vite"
      ]
    },
    {
      heading: "Backend",
      tools: [
        "Node.js",
        "Express.js"
      ]
    },
    {
      heading: "Database",
      tools: [
        "MongoDB"
      ]
    },
    {
      heading: "Tools & Platforms",
      tools: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Render",
        "Vercel"
      ]
    }
  ];

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation triggers once
      easing: 'ease-in-out', // Easing for smooth animation
    });
  }, []);

  // Helper function to apply AOS animations with delay
  const getAosData = (animation, delay) => ({
    "data-aos": animation,
    "data-aos-delay": delay,
  });

  return (
    <div className="skill">
      <div id="skills_heading" className="academics_content1" >
        <div style={{ display: 'inline' }} id="academics_content">
          <h1 {...getAosData('fade-up', 0)} className="academics_heading">Skills</h1>
        </div>
      </div>

      <div className="skills_content2">
        {skills.map((skill, index) => (
          <div
            className="skill_item"
            key={index}
            {...getAosData('fade-up', index * 200)} // Stagger animation for each skill category
          >
            <h1 className="skill_item_heading">{skill.heading}</h1>
            <div className="skill_item_tools">
              {skill.tools.map((tool, toolIndex) => (
                <div className="skill_item_tool_ani">
                  <h3
                    key={toolIndex}
                    className="skill_item_tool"
                    {...getAosData('fade-up', (index + toolIndex) * 100)} // Stagger animation for tools within each category
                  >
                    {tool}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
