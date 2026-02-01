import React from 'react';
import { projects } from '../data/projects';
import '../styles/Cards.css';

const ProjectCard: React.FC = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-header">
            <h2 className="project-name">{project.name}</h2>
          </div>
          
          <p className="project-description">{project.description}</p>
          
          <div className="project-tech-stack">
            <span className="tech-label">TECH STACK: </span>
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-item">{tech}</span>
            ))}
          </div>
          
          <ul className="project-highlights">
            {project.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
          
          {project.videoUrl && (
            <div className="project-video">
              <iframe
                width="100%"
                height="400"
                src={project.videoUrl}
                title={project.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
