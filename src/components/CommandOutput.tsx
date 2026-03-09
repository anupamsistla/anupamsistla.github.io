import React, { useState, useEffect } from 'react';
import { CommandResult } from '../types';
import ProjectCard from './ProjectCard';
import ExperienceCard from './ExperienceCard';
import SkillsCard from './SkillsCard';

interface CommandOutputProps {
  output: CommandResult;
}

const CommandOutput: React.FC<CommandOutputProps> = ({ output }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (output.type === 'projects') {
    return (
      <div className="output">
        <div className="scroll-hint" style={{ marginBottom: '16px', color: '#888', fontSize: '16px', fontWeight: 'bold' }}>
          &lt;! Scroll down for all projects &gt;
        </div>
        <ProjectCard />
      </div>
    );
  }

  if (output.type === 'about') {
    return (
      <div className="output">
        {isMobile && (
          <div className="scroll-hint" style={{ marginBottom: '16px', color: '#888', fontSize: '16px', fontWeight: 'bold' }}>
            &lt;! Scroll down to view full about &gt;
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: output.content as string }} style={{ whiteSpace: 'pre-wrap' }} />
      </div>
    );
  }

  if (output.type === 'experience') {
    return (
      <div className="output">
        {isMobile && (
          <div className="scroll-hint" style={{ marginBottom: '16px', color: '#888', fontSize: '16px', fontWeight: 'bold' }}>
            &lt;! Scroll down for all experiences &gt;
          </div>
        )}
        <ExperienceCard />
      </div>
    );
  }

  if (output.type === 'skills') {
    return (
      <div className="output">
        <div className="scroll-hint" style={{ marginBottom: '16px', color: '#888', fontSize: '16px', fontWeight: 'bold' }}>
          &lt;! Scroll down for all skills &gt;
        </div>
        <SkillsCard />
      </div>
    );
  }

  return (
    <div className="output">
      <pre>{output.content}</pre>
    </div>
  );
};

export default CommandOutput;