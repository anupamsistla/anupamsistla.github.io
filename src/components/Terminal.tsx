import React, { useState, useEffect, useRef } from 'react';
import CommandInput from './CommandInput';
import CommandOutput from './CommandOutput';
import PromptLine from './PromptLine';
import { HistoryEntry } from '../types';
import { handleCommand } from '../commands/commandHandler';
import '../styles/Terminal.css';

const WelcomeMessage: React.FC = () => (
  <div>
    Welcome to my portfolio.
    <br />
    <br />
    Explore projects, experience, and skills using terminal commands.
    <br />
    Type <span style={{ color: '#ff8800', fontWeight: 'bold' }}>'help'</span> to begin.
    <br />
    <br />
    <span style={{ color: '#888' }}>Tip: Use <span style={{ color: '#ff8800', fontWeight: 'bold' }}>Tab</span> for command completion, <span style={{ color: '#ff8800', fontWeight: 'bold' }}>Arrow Up</span> for command history</span>
  </div>
);

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isInitializing, setIsInitializing] = useState<boolean>(true);
  const [initText, setInitText] = useState<string>('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialization animation
    const fullText = 'Initializing portfolio environment....';
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setInitText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsInitializing(false);
          setHistory([{ command: '', output: { type: 'text', content: <WelcomeMessage /> } }]);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    // Scroll to bottom when history changes
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [history, initText]);

  const handleCommandSubmit = (input: string) => {
    const output = handleCommand(input);
    
    if (output.type === 'text' && output.content === 'CLEAR') {
      setHistory([{ command: '', output: { type: 'text', content: <WelcomeMessage /> } }]);
      return;
    }

    setHistory([...history, { command: input, output }]);
    setCommandHistory([...commandHistory, input]);
    setHistoryIndex(-1);
  };

  const getHistoryCommand = (direction: 'up' | 'down'): string => {
    if (commandHistory.length === 0) return '';

    let newIndex = historyIndex;

    if (direction === 'up') {
      newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
    } else {
      newIndex = historyIndex > -1 ? historyIndex - 1 : -1;
    }

    setHistoryIndex(newIndex);
    return newIndex === -1 ? '' : commandHistory[commandHistory.length - 1 - newIndex];
  };

  return (
    <div className="terminal" ref={terminalRef} onClick={() => document.getElementById('command-input')?.focus()}>
      <div className="terminal-header">
        <div className="window-controls">
          <span className="control-btn close"></span>
          <span className="control-btn minimize"></span>
          <span className="control-btn maximize"></span>
        </div>
        <div className="terminal-title">
          <svg className="file-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M3 6.5C3 5.11929 4.11929 4 5.5 4H9.08579C9.351 4 9.60536 4.10536 9.79289 4.29289L11.2071 5.70711C11.3946 5.89464 11.649 6 11.9142 6H18.5C19.8807 6 21 7.11929 21 8.5V17.5C21 18.8807 19.8807 20 18.5 20H5.5C4.11929 20 3 18.8807 3 17.5V6.5Z" fill="#5C9FD6"/>
          </svg>
          anupam@portfolio
        </div>
      </div>
      <div className="terminal-content" ref={contentRef}>
        {isInitializing ? (
          <div style={{ color: '#ff8800', padding: '20px' }}>
            {initText}<span className="cursor-blink">_</span>
          </div>
        ) : (
          <>
            {history.map((entry, index) => (
              <div key={index}>
                {entry.command && <PromptLine command={entry.command} />}
                {entry.output && <CommandOutput output={entry.output} />}
              </div>
            ))}
            <CommandInput onCommandSubmit={handleCommandSubmit} getHistoryCommand={getHistoryCommand} />
          </>
        )}
      </div>
    </div>
  );
};

export default Terminal;