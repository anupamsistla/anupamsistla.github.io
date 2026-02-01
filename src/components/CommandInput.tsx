import React, { useState } from 'react';
import { commands } from '../commands/commandRegistry';

interface CommandInputProps {
  onCommandSubmit: (command: string) => void;
  getHistoryCommand: (direction: 'up' | 'down') => string;
}

const CommandInput: React.FC<CommandInputProps> = ({ onCommandSubmit, getHistoryCommand }) => {
  const [input, setInput] = useState('');

  const handleTabCompletion = () => {
    if (!input.trim()) return;

    const availableCommands = Object.keys(commands);
    const matches = availableCommands.filter(cmd => 
      cmd.startsWith(input.toLowerCase().trim())
    );

    if (matches.length === 1) {
      setInput(matches[0]);
    } else if (matches.length > 1) {
      // Find common prefix
      const commonPrefix = matches.reduce((acc, cmd) => {
        let i = 0;
        while (i < acc.length && i < cmd.length && acc[i] === cmd[i]) {
          i++;
        }
        return acc.substring(0, i);
      }, matches[0]);
      
      if (commonPrefix.length > input.length) {
        setInput(commonPrefix);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onCommandSubmit(input);
      setInput('');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      handleTabCompletion();
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