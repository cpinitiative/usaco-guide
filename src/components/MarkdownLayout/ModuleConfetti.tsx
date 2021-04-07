import * as React from 'react';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Confetti from '../Confetti';

const ModuleConfetti = (props, ref) => {
  const config = {
    numParticles: 100,
    gravity: 250,
    speed: 250,
    scale: 0.5,
    spin: 0,
    twist: 0,
  };
  const { numParticles, gravity, speed, scale, spin, twist } = config;
  const { height, width } = useWindowDimensions();
  const [show, setShow] = useState(false);

  const confettiRef = useRef<any>();

  useImperativeHandle(ref, () => ({
    showConfetti: () => {
      if (show) confettiRef.current.generateParticles();
      else setShow(true);
    },
  }));

  useEffect(() => {
    // show is set to true when a call to show confetti is made.
    // if subsequent calls to show confetti are made before the confetti component unmounts,
    // we will use the same confetti component.
    if (show) {
      confettiRef.current.generateParticles();
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <Confetti
        width={width}
        height={height}
        makeItRainOn="other"
        emitDuration={1000}
        numParticles={numParticles}
        gravity={gravity}
        minSpeed={speed}
        maxSpeed={speed * 3}
        minScale={scale}
        maxScale={scale * 2}
        spin={spin}
        twist={twist}
        onComplete={() => setShow(false)}
        ref={confettiRef}
      />
    </div>
  );
};

export default forwardRef(ModuleConfetti);
