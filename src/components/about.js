import React, { useReducer, useRef } from 'react';
import '../styles/about.css';
import Reducer, { initialState } from "./aboutReducer";

function About({ setActivePage, activeSubPage, setActiveSubPage }) {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const resumeRef = useRef(null);
    const resumeLink = require('../assets/AlonBar-DinCV.pdf');  
  
    const handleResumeClick = () => {
        window.open(resumeLink, "_blank");
    };
    const scrollToResume = () => {
        if (resumeRef.current) {
            resumeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    

    return (
        <div className='container'>
            <div className="button-group">
                <button 
                    className={`about-button about ${activeSubPage === "about" ? "active" : ""}`}
                    onClick={() => {
                        dispatch({ type: "ABOUT" });
                        setActiveSubPage('about'); 
                    }}
                >
                    About me
                </button>
                <button 
                    className={`about-button skills ${activeSubPage === "skills" ? "active" : ""}`}
                    onClick={() => {
                        dispatch({ type: "SKILLS" });
                        setActiveSubPage('skills');
                    }}
                >
                    Skills
                </button>
                <button 
                    className={`about-button army ${activeSubPage === "army" ? "active" : ""}`}
                    onClick={() => {
                        dispatch({ type: "ARMY" });
                        setActiveSubPage('army'); 
                    }}
                >
                    Army Service
                </button>
            </div>
            <div className='toMyResume'>
                <button className="about-button resume" onClick={scrollToResume}>
                    Go To Resume
                </button>
            </div>
            <div className='container2'>
                {state.topic === "about" && (
                    <div className='about-write'>
                        <p>
                        <ul className='list'>
                        <li>
                            I’m a Computer Science graduate
                            from Ben Gurion University, with a GPA of 85.
                        </li> 
                        <li>
                            I am passionate
                            about learning new technologies and constantly evolving my skills.
                        </li>
                        <li>
                            I started playing computer games from an early age,
                            which sparked my interest in technology and problem-solving.
                        </li>
                        <li>
                            I completed 5 units of Computer Science in high school.
                        </li>
                        <li>
                            I love playing Tennis, Padel, reading books and travel around the world.
                        </li>
                        </ul>
                        </p>
                    </div>
                )}
                {state.topic === "skills" && (
                    <div className='skills-write'>
                         <h3>Programming Languages:</h3> Python, Java, C++, JavaScript, TypeScript, CSS, HTML, C, C#, SQL, Go, Ruby
                        <h3>Frameworks & Tools:</h3> Node.js/Express, Git, .NET, Linux, React, Unix, Bash, AWS
                        <h3>Algorithms & Data Structures:</h3> Proficient in algorithm design, data structures, and problem-solving
                        <h3>Web Technologies:</h3> HTTP, Postman, XML, JSON, RESTful APIs, SOAP, UDP and TCP protocols
                    </div>    
                )}
                 {state.topic === "army" && (
                    <div className='army-write'>
                        Served in the Israeli Defense Forces (IDF) between 2016-2019 as
                        a combat soldier in the Artillery Corps.
                    </div>    
                )}
                
            </div>
            <div ref={resumeRef} className="resume-section">
                <button className="resume-button" onClick={handleResumeClick}>
                    View My Resume
                </button>
            </div>
        </div>
    );
}

export default About;
