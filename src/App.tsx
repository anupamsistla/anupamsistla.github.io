import React from 'react';
import Terminal from './components/Terminal';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="header-section">
          <h1 className="portfolio-name">ANUPAM_SISTLA</h1>
          <div className="quick-actions">
            <button className="quick-btn" onClick={() => window.open(`${process.env.PUBLIC_URL}/Resume/Anupam_Resume.pdf`, '_blank')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/>
              </svg>
              Resume
            </button>
            <button className="quick-btn" onClick={() => window.open('https://linkedin.com/in/anupamsistla/', '_blank')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              LinkedIn
            </button>
            <button className="quick-btn" onClick={() => window.open('https://github.com/anupamsistla', '_blank')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              GitHub
            </button>
          </div>
        </div>
        <Terminal />
        <div className="terminal-quick-actions">
          <button className="terminal-quick-btn" onClick={() => {
            if ((window as any).executeTerminalCommand) {
              (window as any).executeTerminalCommand('skills');
            }
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 2C8.45 2 8 2.45 8 3V5H4C2.89 5 2 5.89 2 7V10C2 10.55 2.45 11 3 11H6V13H3C2.45 13 2 13.45 2 14V21C2 21.55 2.45 22 3 22H9C9.55 22 10 21.55 10 21V18H14V21C14 21.55 14.45 22 15 22H21C21.55 22 22 21.55 22 21V14C22 13.45 21.55 13 21 13H18V11H21C21.55 11 22 10.55 22 10V7C22 5.89 21.1 5 20 5H16V3C16 2.45 15.55 2 15 2H9M10 7H14V13H10V7M16 11V13H20V16H16V20H14V14H10V20H8V16H4V13H8V11H16Z"/>
            </svg>
            Skills
          </button>
          <button className="terminal-quick-btn" onClick={() => {
            if ((window as any).executeTerminalCommand) {
              (window as any).executeTerminalCommand('experience');
            }
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"/>
            </svg>
            Experience
          </button>
          <button className="terminal-quick-btn" onClick={() => {
            if ((window as any).executeTerminalCommand) {
              (window as any).executeTerminalCommand('projects');
            }
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z"/>
            </svg>
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;