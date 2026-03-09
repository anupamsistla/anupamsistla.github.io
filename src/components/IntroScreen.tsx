import React, { useState, useEffect } from 'react';
import '../styles/IntroScreen.css';

interface IntroScreenProps {
  onComplete: () => void;
}

type Phase = 'typing1' | 'pause' | 'typing2' | 'hold' | 'fading';

const LINE1 = 'ANUPAM';
const LINE2 = 'SISTLA';
const CHAR_DELAY = 140;

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [phase, setPhase] = useState<Phase>('typing1');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing1') {
      if (line1.length < LINE1.length) {
        timeout = setTimeout(() => {
          setLine1(LINE1.slice(0, line1.length + 1));
        }, CHAR_DELAY);
      } else {
        timeout = setTimeout(() => setPhase('pause'), 300);
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('typing2'), 100);
    } else if (phase === 'typing2') {
      if (line2.length < LINE2.length) {
        timeout = setTimeout(() => {
          setLine2(LINE2.slice(0, line2.length + 1));
        }, CHAR_DELAY);
      } else {
        timeout = setTimeout(() => setPhase('hold'), 900);
      }
    } else if (phase === 'hold') {
      timeout = setTimeout(() => setPhase('fading'), 100);
    } else if (phase === 'fading') {
      timeout = setTimeout(() => onComplete(), 700);
    }

    return () => clearTimeout(timeout);
  }, [phase, line1, line2, onComplete]);

  const showCursor1 = phase === 'typing1';
  const showCursor2 = phase === 'typing2';

  return (
    <div className={`intro-screen${phase === 'fading' ? ' intro-fading' : ''}`}>
      <div className="intro-text-wrap">
        <div className="intro-line">
          <span className="intro-chars">{line1}</span>
          {showCursor1 && <span className="intro-cursor" />}
          {!showCursor1 && line1.length === LINE1.length && (
            <span className="intro-cursor intro-cursor--hidden" />
          )}
        </div>
        <div className="intro-line">
          <span className="intro-chars">{line2}</span>
          {showCursor2 && <span className="intro-cursor" />}
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
