import React from 'react';
import whatsappIcon from '../assets/WhatsappIcon.png';  
import linkedinIcon from '../assets/LinkedInIcon.png';  
import githubIcon from '../assets/GitHubIcon.png';  
import '../styles/contacts.css';


function Contacts() {
  const resumeLink = require('../assets/AlonBar-DinCV.pdf');  
  
  const handleResumeClick = () => {
    window.open(resumeLink, "_blank");
  };

  return (
    <div className='contacts-Container'>
      <h1 className='topic-contacts'>Contacts:</h1>
      <div className="icons-container">
        <a href="https://api.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
          <div>WhatsApp</div>
        </a>
        <a href="https://www.linkedin.com/in/alon-bar-din/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
          <div>LinkedIn</div>
        </a>
        <a href="https://github.com/1997alon?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="contact-icon" />
          <div>GitHub</div>
        </a>
      </div>
      <button className="resume-button" onClick={handleResumeClick}>
        View My Resume
      </button>
    </div>
  );
}

export default Contacts;
