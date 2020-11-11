export type Particle = {
  birth: number;
  initialPosition: [number, number];
  currentPosition: [number, number];
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
