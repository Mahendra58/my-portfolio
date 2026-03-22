import './Home.css';
import { useEffect, useRef, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Academics from '../../Components/Academics/Academics';
import Projects from '../../Components/Projects/Projects';
import Experiences from '../../Components/Experiences/Experiences';
import Skills from '../../Components/Skills/Skills';

import Connect from '../../Components/Connect/Connect';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    // Create references for each section
    const heroRef = useRef(null);
    const academicsRef = useRef(null);
    const projectsRef = useRef(null);
    const experiencesRef = useRef(null);
    const skillsRef = useRef(null);

    const connectRef = useRef(null);

    // State to track the active section
    const [activeSection, setActiveSection] = useState("");

    // Intersection Observer setup
    useEffect(() => {
        const isMobile = window.innerWidth <= 800; // Adjust threshold or margin based on screen size
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: isMobile ? 0.1 : 0.5, // 50% visibility threshold
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); // Set active section based on the id
                }
            });
        }, options);

        // Start observing each section
        if (heroRef.current) observer.observe(heroRef.current);
        if (academicsRef.current) observer.observe(academicsRef.current);
        if (projectsRef.current) observer.observe(projectsRef.current);
        if (experiencesRef.current) observer.observe(experiencesRef.current);
        if (skillsRef.current) observer.observe(skillsRef.current);

        if (connectRef.current) observer.observe(connectRef.current);

        return () => {
            // Cleanup observer
            observer.disconnect();
        };
    }, []);

    return (
        <div className="home">
            <Navbar activeSection={activeSection} />
            <div ref={heroRef} className="hero123" id="hero"><Hero /></div>
            <div ref={academicsRef} id="academics"><Academics /></div>
            <div ref={projectsRef} id="projects"><Projects /></div>
            <div ref={experiencesRef} id="experiences"><Experiences /></div>
            <div ref={skillsRef} id="skills"><Skills /></div>

            <div ref={connectRef} id="connect"><Connect /></div>
            <Footer />
        </div>
    );
}

export default Home;
