import "./Footer.css";
import linkedin from "../../Images/linkedin.svg";
import github from "../../Images/github.svg";
import leetcode from "../../Images/leetcode.svg";
import profilepic from "../../Images/profile_pic.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="some"></div>
            <div className="line"></div>
            <div className="footer_content">
                <div className="social_media">
                    <h1 className="social_media_heading">Social Media</h1>
                    <div className="social_media_icons">
                        <a href="https://www.linkedin.com/in/mahendra-singh-barod" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="social_media_icon" alt="LinkedIn" /></a>
                        <a href="https://github.com/Mahendra58" target="_blank" rel="noopener noreferrer"><img src={github} className="social_media_icon" alt="GitHub" /></a>
                        <a href="https://leetcode.com/u/mahendrasingh_569" target="_blank" rel="noopener noreferrer"><img src={leetcode} className="social_media_icon" alt="LeetCode" /></a>
                    </div>
                </div>
                <div className="footer_link_container">
                    <h1 className="social_media_heading">Quick Links</h1>
                    <div className="footer_links">
                        <a href="#hero" className="footer_link">Home</a>
                        <a href="#academics" className="footer_link">About</a>
                        <a href="#projects" className="footer_link">Projects</a>
                        <a href="#connect" className="footer_link">Connect</a>
                    </div>
                </div>
                <div className="footer_thanks">
                    <h1 className="social_media_heading">Special Thanks to</h1>
                    <h1 className="footer_link1">I would like to extend my heartfelt gratitude to my loving family for their unwavering support, guidance, and constant encouragement. Their belief in me has been the driving force behind my growth and has made all the difference in my journey as a developer.</h1>

                </div>
                <div className="footer_photo">
                    <img src={profilepic} className="footer_photo_image" alt="Mahendra Singh" />
                    <h1 className="footer_photo_text">MAHENDRA SINGH</h1>
                </div>
            </div>
            <div className="line"></div>
            <div className="footer_bottom">
                <h1 className="footer_bottom_text">© 2025 Mahendra Singh. All rights reserved.</h1>
            </div>
        </div>
    )
}

export default Footer;