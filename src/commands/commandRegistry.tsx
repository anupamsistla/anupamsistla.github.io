import React from 'react';
import { Command } from '../types';
import { about } from '../data/about';
import { skills } from '../data/skills';

export const commands: { [key: string]: Command } = {
  help: {
    name: 'help',
    description: 'List all commands',
    execute: () => {
      const helpLines = Object.entries(commands).map(([name, cmd]) => {
        const commandName = name.padEnd(20);
        return (
          <div key={name}>
            <span style={{ fontWeight: 'bold' }}>{commandName}</span> {cmd.description}
          </div>
        );
      });
      
      return {
        type: 'text',
        content: <div>{helpLines}</div>
      };
    }
  },
  about: {
    name: 'about',
    description: 'About Me',
    execute: () => {
      const bioText = about.bio
        .replace(/New Grad/g, '<span style="font-weight: bold; color: #ff8800;">New Grad</span>')
        .replace(/Internship roles/g, '<span style="font-weight: bold; color: #ff8800;">Internship roles</span>')
        .replace(/Software Engineering/g, '<span style="font-weight: bold; color: #ff8800;">Software Engineering</span>');
      return {
        type: 'text',
        content: <div dangerouslySetInnerHTML={{ __html: bioText }} />
      };
    }
  },
  experience: {
    name: 'experience',
    description: 'My Work Ex',
    execute: () => {
      return {
        type: 'experience'
      };
    }
  },
  education: {
    name: 'education',
    description: 'My Education',
    execute: () => {
      return {
        type: 'text',
        content: (
          <pre style={{ margin: 0 }} className="education-output">
            <div style={{ color: '#ccc', fontWeight: 'bold' }}>result.student.record</div>
            <div className="education-border" style={{ color: '#ff8800' }}>──────────────────────────</div>
            <div>
              <span style={{ color: '#ccc' }}>Name:           </span>
              <span style={{ color: '#b4befe' }}>"{about.name}"</span>
            </div>
            <div>
              <span style={{ color: '#ccc', display: 'inline-block', verticalAlign: 'top' }}>Institution:    </span>
              <span style={{ color: '#b4befe', display: 'inline-block', maxWidth: 'calc(100% - 16ch)' }}>"{about.university}"</span>
            </div>
            <div>
              <span style={{ color: '#ccc' }}>Major:          </span>
              <span style={{ color: '#b4befe' }}>"{about.major}"</span>
            </div>
            <div>
              <span style={{ color: '#ccc' }}>Degree:         </span>
              <span style={{ color: '#b4befe' }}>"Bachelor of Science"</span>
            </div>
            <div>
              <span style={{ color: '#ccc' }}>Status:         </span>
              <span style={{ color: '#b4befe' }}>"Senior (Expected: May 2026)"</span>
            </div>
            <div>
              <span style={{ color: '#ccc' }}>GPA:            </span>
              <span style={{ color: '#b4befe' }}>"3.88/4.00"</span>
            </div>
            <div>
              <span style={{ color: '#ccc' }}>Age:            </span>
              <span style={{ color: '#b4befe' }}>"{about.age}"</span>
            </div>
            <div className="education-border" style={{ color: '#ff8800' }}>──────────────────────────</div>
          </pre>
        )
      };
    }
  },
  skills: {
    name: 'skills',
    description: 'My Tech Skills',
    execute: () => {
      return {
        type: 'skills'
      };
    }
  },
  projects: {
    name: 'projects',
    description: 'My Tech Projects',
    execute: () => {
      return {
        type: 'projects'
      };
    }
  },
  resume: {
    name: 'resume',
    description: 'My Resume',
    execute: () => {
      window.open(`${process.env.PUBLIC_URL}/Resume/Anupam_Resume.pdf`, '_blank');
      return {
        type: 'text',
        content: 'Opening resume...'
      };
    }
  },
  contact: {
    name: 'contact',
    description: 'Contact Me',
    execute: () => {
      return {
        type: 'text',
        content: (
          <pre style={{ margin: 0 }}>
            <div style={{ color: '#ccc', fontWeight: 'bold' }}>result contact.info</div>
            <div className="contact-border" style={{ color: '#ff8800' }}>──────────────────────────</div>
            <div>
              <span style={{ color: '#ccc' }}>email       </span>
              <span style={{ color: '#b4befe' }}>"{about.email}"</span>
            </div>
            <div>
              <span style={{ color: '#ccc' }}>linkedin    </span>
              <span style={{ color: '#b4befe' }}>"{about.website}"</span>
            </div>
            <div>
              <span style={{ color: '#ccc' }}>phone       </span>
              <span style={{ color: '#b4befe' }}>"+1 (312) 292-7975"</span>
            </div>
            <div className="contact-border" style={{ color: '#ff8800' }}>──────────────────────────</div>
          </pre>
        )
      };
    }
  },
  'contact --email': {
    name: 'contact --email',
    description: 'Send me an email',
    execute: () => {
      window.open(`mailto:${about.email}`);
      return {
        type: 'text',
        content: 'Opening email client...'
      };
    }
  },
  clear: {
    name: 'clear',
    description: 'Clear terminal',
    execute: () => {
      return {
        type: 'text',
        content: 'CLEAR'
      };
    }
  }
};