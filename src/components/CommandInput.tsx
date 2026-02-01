import React, { useState } from 'react';

interface CommandInputProps {
  onCommandSubmit: (command: string) => void;
  getHistoryCommand: (direction: 'up' | 'down') => string;
}

const CommandInput: React.FC<CommandInputProps> = ({ onCommandSubmit, getHistoryCommand }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onCommandSubmit(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const historyCmd = getHistoryCommand('up');
      setInput(historyCmd);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const historyCmd = getHistoryCommand('down');
      setInput(historyCmd);
    }
  };

  return (
    <div className="input-line">
      <span className="prompt">
        <span className="prompt-user">anupam@portfolio</span>
        <span className="prompt-separator"> ~ </span>
        <span className="prompt-lambda">$</span>
      </span>
      <input
        id="command-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        spellCheck={false}
        autoComplete="off"
      />
    </div>
  );
};

export default CommandInput;