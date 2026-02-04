import React from 'react';
import { skills, Skill } from '../data/skills';

const SkillsCard: React.FC = () => {
  // Calculate maximum name length across ALL categories for uniform alignment
  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.tools
  ];
  const maxNameLength = Math.max(...allSkills.map(s => s.name.length));
  const nameColWidth = maxNameLength + 2; // Consistent width for all categories

  const generateProgressBar = (level: number): string => {
    const totalBlocks = 20;
    const filledBlocks = Math.round((level / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    
    const filled = '█'.repeat(filledBlocks);
    const empty = '░'.repeat(emptyBlocks);
    
    return `[${filled}${empty}]`;
  };

  const renderSkillCategory = (title: string, skillsList: Skill[]) => {
    // Calculate box width: name + space + [20 blocks] + space + percentage (4 chars) + padding
    const contentWidth = nameColWidth + 1 + 22 + 1 + 4;
    const boxWidth = contentWidth + 2; // +2 for the border pipes
    
    return (
      <div className="skill-category">
        <pre className="category-title">╔{'═'.repeat(boxWidth)}╗</pre>
        <pre className="category-title">║ {title.toUpperCase().padEnd(contentWidth)} ║</pre>
        <pre className="category-title">╠{'═'.repeat(boxWidth)}╣</pre>
        {skillsList.map((skill, index) => {
          const nameCell = skill.name.padEnd(nameColWidth);
          const progressBar = generateProgressBar(skill.level);
          const percentage = `${skill.level}%`.padStart(4);
          
          return (
            <pre key={index} className="skill-row"><span className="pipe">║</span> {nameCell} {progressBar} {percentage} <span className="pipe">║</span></pre>
          );
        })}
        <pre className="category-title">╚{'═'.repeat(boxWidth)}╝</pre>
      </div>
    );
  };

  return (
    <div className="skills-container">
      {renderSkillCategory('Languages', skills.languages)}
      {renderSkillCategory('Frameworks', skills.frameworks)}
      {renderSkillCategory('Tools', skills.tools)}
    </div>
  );
};

export default SkillsCard;