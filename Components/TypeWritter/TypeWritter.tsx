import React, { useEffect, useRef, useState } from 'react';
import styles from './TypeWritter.module.css';

const dataText = [
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",
  "Astrotime..",

];

const PhraseChangingSection: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState('');
  // Use a ref to store active timer IDs so we can clear them on unmount
  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach(timerId => clearTimeout(timerId));
    timersRef.current = [];
  };

  // Function to type out the word letter by letter
  const typeWriter = (text: string, i: number, fnCallback: () => void) => {
    if (i < text.length) {
      setCurrentPhrase(prev => prev + text.charAt(i));
      const timerId = window.setTimeout(() => {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
      timersRef.current.push(timerId);
    } else {
      const timerId = window.setTimeout(fnCallback, 2000);
      timersRef.current.push(timerId);
    }
  };

  // Function to start the text animation
  const startTextAnimation = (i: number) => {
    if (i < dataText.length) {
      setCurrentPhrase('');
      typeWriter(dataText[i], 0, () => {
        startTextAnimation(i + 1);
      });
    } else {
      const timerId = window.setTimeout(() => {
        startTextAnimation(0);
      }, 2000);
      timersRef.current.push(timerId);
    }
  };

  // Start the animation when the component mounts and clear timers on unmount
  useEffect(() => {
    startTextAnimation(0);
    return () => {
      clearTimers();
    };
  }, []);

  return (
    <div>
      <div className={styles.frontHeadingDiv}>
        <h1 className={styles.frontHeadingText}>
          <span className={styles.fixedWord}>श्री</span>
          <div className={styles.changingWordDiv}>
            <span className={styles.changingWord}>{currentPhrase}</span>
          </div>
        </h1>
        <h1 className={styles.frontHeadingText}>Every Moment Tells a Story.!</h1>

        <button className={styles.SectionButton}>
                Know More
        </button>
      </div>
    </div>
  );
};

export default PhraseChangingSection;
