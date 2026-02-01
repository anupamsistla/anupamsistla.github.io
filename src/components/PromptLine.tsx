import React from 'react';

interface PromptLineProps {
  command: string;
}

const PromptLine: React.FC<PromptLineProps> = ({ command }) => {
  return (
    <div className="prompt-line">
      <span className="prompt">
        <span className="prompt-user">anupam@portfolio</span>
        <span className="prompt-separator"> ~ </span>
        <span className="prompt-lambda">$</span>
      </span>
      <span className="command-text">{command}</span>
    </div>
  );
};

export default PromptLine;