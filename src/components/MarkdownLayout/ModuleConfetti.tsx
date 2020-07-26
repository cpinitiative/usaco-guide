import * as React from 'react';
import Confetti from '../Confetti';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const ModuleConfetti = ({ show, onDone }) => {
  let config = {
    numParticles: 100,
    gravity: 250,
    speed: 250,
    scale: 0.5,
    spin: 0,
    twist: 0,
  };
  const { numParticles, gravity, speed, scale, spin, twist } = config;
  const { height, width } = useWindowDimensions();

  React.useEffect(() => {
    let timeout = null;
    if (show) timeout = setTimeout(() => onDone(), 3000);
    if (timeout) return () => clearTimeout(timeout);
  }, [show]);

  if (!show) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <Confetti
        width={width}
        height={height}
        makeItRainOn="mount"
        emitDuration={1000}
        numParticles={numParticles}
        gravity={gravity}
        minSpeed={speed}
        maxSpeed={speed * 3}
        minScale={scale}
        maxScale={scale * 2}
        spin={spin}
        twist={twist}
      />
    </div>
  );
};

export default ModuleConfetti;
