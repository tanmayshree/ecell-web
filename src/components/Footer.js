import './Footer.css'
import img from "./../assets/Logo-color.png";
import { NavLink } from 'react-router-dom';
import React from "react";

const Footer = () => {
    return (
        <div className='Footer-wrapper'>
            <div className="Footer">
                <img className="logo" src={img} alt="E-CELL" />
                <div className="foot-links-wrapper">
                    <div className="site-links foot-link">
                        <h4 className="links-title">Site Links</h4>
                        <NavLink to="/">
                            <p className="link">Home</p>
                        </NavLink>
                        <NavLink to="/events">
                            <p className="link">Events</p>
                        </NavLink>
                        <NavLink to="/gallery">
                            <p className="link">Gallery</p>
                        </NavLink>
                        <NavLink to="/team">
                            <p className="link">Our Team</p>
                        </NavLink>
                        <NavLink to="/testimonials">
                            <p className="link">Testimonials</p>
                        </NavLink>
                        <NavLink to="/contact-us">
                            <p className="link">Contact Us</p>
                        </NavLink>
                    </div>

                    <div className="ref-links foot-link">
                        <h4 className="links-title">Reference Links</h4>
                        <a href="https://www.nita.ac.in/" target="_blank" rel="noopener noreferrer"><p className="link">NIT Agartala</p></a>
                        <a href="https://iiitagartala.ac.in/" target="_blank" rel="noopener noreferrer"><p className="link">IIIT Agartala</p></a>
                        <a href="https://www.nita.ac.in/iices/" target="_blank" rel="noopener noreferrer"><p className="link">IIC Website</p></a>
                        <a href="https://www.startupindia.gov.in/" target="_blank" rel="noopener noreferrer"><p className="link">Startup India</p></a>
                        <a href="https://mhrd.ap.gov.in/MHRD/login.do" target="_blank" rel="noopener noreferrer"><p className="link">MHRD</p></a>
                        {/* <a href=""><p className="link">NEC</p></a> */}
                    </div>
                </div>
                <iframe title='g-map' className="g-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.3788164800835!2d91.42115771478595!3d23.840678484544963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753ed686722f717%3A0x18d822d15feb14af!2sE-CELL%2C%20NIT%20Agartala!5e0!3m2!1sen!2sin!4v1644342321516!5m2!1sen!2sin" />
            </div>
            <div className="social-media">
                <h3 className="social-title">Follow our Social Media handles:</h3>
                <a href="https://www.linkedin.com/company/ecellnita" target="_blank" rel="noopener noreferrer"><i className="f-sm fab fa-linkedin" /></a>
                <a href="https://www.facebook.com/ecellnita/" target="_blank" rel="noopener noreferrer"><i className="f-sm fab fa-facebook" /></a>
                <a href="https://www.youtube.com/channel/UCtGAJ5Imfxks7avFmXcKzcg" target="_blank" rel="noopener noreferrer"><i className="f-sm fab fa-youtube" /></a>
                <a href="https://www.instagram.com/ecellnita/" target="_blank" rel="noopener noreferrer"><i className="f-sm fab fa-instagram" /></a>
                <a href="https://twitter.com/ecellnita" target="_blank" rel="noopener noreferrer"><i className="f-sm fab fa-twitter" /></a>
                <a href="mailto: nitaecell@gmail.com" target="_blank" rel="noopener noreferrer"><i className="f-sm fab fas fa-envelope" /></a>
            </div>

            <p className="foot-text">Designed and Developed by Web Development Team, E-Cell, NIT Agartala<br /><i className="far fa-copyright" /> Copyright 2022 &nbsp; All Rights Reserved</p>
        </div>
    );
}

export default Footer;