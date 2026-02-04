import React, { useState, useRef, useEffect } from 'react';
import { experiences } from '../data/experience';
import '../styles/Cards.css';

const ExperienceCard: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const detailBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (index: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Blur any active input to prevent keyboard from opening on mobile
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setSelectedIndex(index);
    
    // On mobile, scroll to the detail box title after render
    if (isMobile) {
      setTimeout(() => {
        if (detailBoxRef.current) {
          detailBoxRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 150);
    }
  };

  const handleClose = () => {
    // Blur any active input to prevent keyboard from opening on mobile
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    
    setSelectedIndex(null);
  };

  return (
    <div className="experience-wrapper">
      {selectedIndex !== null && (
        <div className="detail-box" ref={detailBoxRef}>
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
            <div 
              key={index} 
              className="card experience-card clickable-card"
              onClick={(e) => handleCardClick(index, e)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(index);
                }
              }}
            >
              <div className="card-header">
                <h3>{exp.title}</h3>
              </div>
              <div className="card-body">
                <p className="card-company">{exp.company}</p>
                <span className="card-duration">{exp.duration}</span>
                <p className="card-description">{exp.description}</p>
              </div>
              
              <div className="info-indicator" aria-hidden="true">
                <span className="info-icon">ⓘ</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
