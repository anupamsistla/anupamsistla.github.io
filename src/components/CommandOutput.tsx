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
        <ProjectCard />
        <div className="scroll-hint" style={{ marginTop: '36px', color: '#888', fontSize: '16px', fontWeight: 'bold' }}>
          &lt;! Scroll up for all projects &gt;
        </div>
      </div>
    );
  }

  if (output.type === 'experience') {
    return (
      <div className="output">
        <ExperienceCard />
        {isMobile && (
          <div className="scroll-hint" style={{ marginTop: '36px', color: '#888', fontSize: '16px', fontWeight: 'bold' }}>
            &lt;! Scroll up for all experiences &gt;
          </div>
        )}
      </div>
    );
  }

  if (output.type === 'skills') {
    return (
      <div className="output">
        <SkillsCard />
        <div className="scroll-hint" style={{ marginTop: '16px', color: '#888', fontSize: '16px', fontWeight: 'bold' }}>
          &lt;! Scroll up for all skills &gt;
        </div>
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