export type Particle = {
  birth: number;
  initialPosition: { x: number; y: number };
  currentPosition: { x: number; y: number };
  spinForce: number;
  twistForce: number;
  currentSpin: number;
  currentTwist: number;
  angle: number;
  scale: number;
  vx: number;
  vy: number;
  front: HTMLElement;
  back: HTMLElement;
  width: number;
  height: number;
};

export type Shape = {
  front: HTMLImageElement;
  back: HTMLImageElement;
};
