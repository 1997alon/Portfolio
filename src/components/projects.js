import React from 'react';
import { projects } from './myProjects';
import '../styles/projects.css';

function Project({ id, title, image, description, link }) {
    function handleClick() {
        window.open(link, '_blank');
    }

    // Assign alignment based on the id (odd/even)
    const alignmentClass = id % 2 === 0 ? 'right-align' : 'left-align';

    return (
        <div className={`project-card ${alignmentClass}`} onClick={handleClick}>
            <div className="project-content">
                <div className="project-title">{title}</div>
                <img src={image} alt={title} className="project-image" />
                <p className="project-description">{description}</p>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <div className='projects-container'>
            {/* Ensure only 6 cards are rendered */}
            {projects.slice(0, 6).map((project) => (
                <Project key={project.id} {...project} />
            ))}
        </div>
    );
}

export default Projects;