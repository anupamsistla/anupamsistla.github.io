import React, { useState } from 'react';
import { experiences } from '../data/experience';
import '../styles/Cards.css';

const ExperienceCard: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="experience-wrapper">
      {selectedIndex !== null && (
        <div className="detail-box">
          <button className="close-btn" onClick={handleClose}>
            ×
          </button>
          <h3 className="detail-title">{experiences[selectedIndex].title}</h3>
          <p className="detail-company">{experiences[selectedIndex].company} | {experiences[selectedIndex].duration}</p>
          
          {experiences[selectedIndex].responsibilities && experiences[selectedIndex].responsibilities!.length > 0 && (
            <div className="detail-section">
              <h4>Responsibilities:</h4>
              <ul>
                {experiences[selectedIndex].responsibilities!.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {experiences[selectedIndex].achievements && experiences[selectedIndex].achievements!.length > 0 && (
            <div className="detail-section">
              <h4>Key Achievements:</h4>
              <ul>
                {experiences[selectedIndex].achievements!.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {experiences[selectedIndex].technologies && experiences[selectedIndex].technologies!.length > 0 && (
            <div className="detail-section">
              <h4>Technologies:</h4>
              <div className="card-tags">
                {experiences[selectedIndex].technologies!.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      
      {selectedIndex === null && (
        <div className="cards-container">
          {experiences.map((exp, index) => (
            <div key={index} className="card experience-card">
              <div className="card-header">
                <h3>{exp.title}</h3>
              </div>
              <div className="card-body">
                <p className="card-company">{exp.company}</p>
                <span className="card-duration">{exp.duration}</span>
                <p className="card-description">{exp.description}</p>
              </div>
              
              <button 
                className="info-btn"
                onClick={() => handleCardClick(index)}
                aria-label="View details"
              >
                <span className="info-icon">ⓘ</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
