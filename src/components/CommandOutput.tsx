import React from 'react';
import { CommandResult } from '../types';
import ProjectCard from './ProjectCard';
import ExperienceCard from './ExperienceCard';
import SkillsCard from './SkillsCard';

interface CommandOutputProps {
  output: CommandResult;
}

const CommandOutput: React.FC<CommandOutputProps> = ({ output }) => {
  if (output.type === 'projects') {
    return (
      <div className="output">
        <ProjectCard />
      </div>
    );
  }

  if (output.type === 'experience') {
    return (
      <div className="output">
        <ExperienceCard />
      </div>
    );
  }

  if (output.type === 'skills') {
    return (
      <div className="output">
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