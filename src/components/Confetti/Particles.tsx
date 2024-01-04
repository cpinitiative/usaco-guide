import * as React from 'react';
import { defaultShapes } from './confetti-shapes.js';
import { getDiameter, random, range, sample } from './Confetti.helpers';
import type { Particle, Shape } from './types';

type State = {
  particles: Array<Particle>;
};

type ChildFnProps = {
  particles: Array<Particle>;
  generateParticles: () => void;
};

type Props = {
  // The width of the HTML canvas. No default value provided.
  width: number;
  // The height of the HTML canvas. No default value provided.
  height: number;

  // An array of shapes, used when generating particles
  // (each item provided has an equal chance of being selected as a
  // particle)
  shapes: Array<Shape>;

  // The number of particles to generate, spread over the
  // `emitDuration` length.
  numParticles: number;

  // The amount of downward acceleration to provide.
  // Range: 10 = very slow, 10,000 = very fast.
  gravity: number;
  // The amount of Z-axis (2D) rotation to provide to each particle.
  // Each particle has a random number specified, between 0 and n.
  // Range: 0 = no spin, 10 = reasonable spin, 100 = pukeville
  spin: number;
  // The amount of X-axis (3D) rotation to provide to each particle.
  // Each particle has a random number specified, between 0 and n.
  // Range: 0 = no twist, 10 = reasonable twist, 100 = hummingbird
  twist: number;

  // Each particle will have a random speed assigned, contained by
  // `minSpeed` and `maxSpeed`.
  // This is the base speed, which is affected by `gravity`.
  minSpeed: number;
  maxSpeed: number;
  // Each particle will have a random size applied, contained by
  // `minScale` and `maxScale`. If you'd like all particles to retain
  // their original size, simply provide `1` for both values.
  minScale: number;
  maxScale: number;

  // Amount of time to spread the release of particles, in milliseconds.
  emitDuration: number;

  // Callback triggered when animation ends.
  // NOTE: Only fires when all particles are off-canvas. Retriggering
  // the confetti before it's completed will delay the handler.
  onComplete?: () => void;

  // This component simply creates and updates the Particles.
  // The children are responsible for figuring out what to do with them.
  children: (props: ChildFnProps) => React.ReactNode;
};

class Particles extends React.PureComponent<Props, State> {
  static defaultProps = {
    shapes: defaultShapes,
    numParticles: 100,
    gravity: 1000,
    spin: 10,
    twist: 5,
    minSpeed: 225,
    maxSpeed: 575,
    minScale: 1,
    maxScale: 1.5,
    emitDuration: 1000,
  };

  state = {
    particles: [],
  };

  animationFrameId: number;

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.particles.length === 0 && this.state.particles.length > 0) {
      this.tick();
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameId);
  }

  generateParticles = () => {
    const newParticles = range(this.props.numParticles).map(i => {
      // Particles can be spread over a duration.
      // Each particle should be "born" at a random time during the emit
      // duration (if this value is 0, they'll all share the same birthdate).
      const birth = Date.now() + random(0, this.props.emitDuration);

      // Scale and Speed are specified in ranges. Select a value for this
      // particle from within the range.
      const speed = random(this.props.minSpeed, this.props.maxSpeed);
      const scale = random(this.props.minScale, this.props.maxScale);

      // Values for `spin` and `twist` are specified through props, but the
      // values given represent the maximum absolute values possible.
      // If `spin` is 30, that means each particle will select a random
      // `spinForce` between -30 and 30.
      const spinForce = this.props.spin * random(-1, 1);
      const twistForce = this.props.twist * random(-1, 1);
      // `currentSpin` and `currentTwist` are trackers for the current values
      // as the animation progresses. Start them at `0`.
      // NOTE: this does not mean that each particle will start with the same
      // orientation - this is also influenced by `angle`, which is randomized.
      // This represents the current deviation from the `angle`.
      const currentSpin = 0;
      const currentTwist = 0;

      // Each particle starts along the top of the canvas, with a random
      // `x` coordinate somewhere along its width.
      const initialPosition = {
        x: random(0, 1) * this.props.width,
        y: 0,
      };

      const shape = sample(this.props.shapes);
      const { front, back } = shape;

      // ~~~ TRIGONOMETRY STUFF ~~~
      // `angle` is the degree, in radians, that the shape is rotated along
      // its Z-axis:
      //                                  ________
      //      /\         π radians        \      /
      //    /   \           ->             \   /
      //  /______\                          \/
      //
      const angle = random(0, 2 * Math.PI);

      // `trajectory` represents the angle of the particle's movement.
      // Larger numbers means the particle deviates further from its initial
      // `x` coordinate.
      const trajectoryVariance = random(-1, 1);
      const trajectory = -Math.PI / 2 + trajectoryVariance;

      // `vx` and `vy` represent the velocity across both axes, and will be
      // used to compute how much a particle should move in a given frame.
      const vx = Math.cos(trajectory) * speed;
      const vy = Math.sin(trajectory) * speed * -1;
      //
      // ~~~ END TRIGONOMETRY STUFF ~~~

      return {
        birth,
        initialPosition,
        currentPosition: initialPosition,
        spinForce,
        twistForce,
        currentSpin,
        currentTwist,
        angle,
        scale,
        vx,
        vy,
        front,
        back,
        width: front.naturalWidth,
        height: front.naturalHeight,
      };
    });

    this.setState({
      particles: [...this.state.particles, ...newParticles],
    });
  };

  tick = () => {
    if (this.state.particles.length === 0) {
      return;
    }

    this.animationFrameId = window.requestAnimationFrame(() => {
      const particles = this.calculateNextPositionForParticles();

      this.setState({ particles }, this.tick);
    });
  };

  calculateNextPositionForParticles = () => {
    const now = Date.now();
    const { height, width } = this.props;

    return this.state.particles
      .map(particle => {
        const age = (now - particle.birth) / 1000;

        // Skip a particle if it hasn't been born yet.
        if (age < 0) {
          return particle;
        }

        const x = particle.initialPosition.x + particle.vx * age;
        const y =
          particle.initialPosition.y +
          particle.vy * age +
          (this.props.gravity * age * age) / 2;

        const diameter = getDiameter(
          particle.width * particle.scale,
          particle.height * particle.scale
        );

        const isOffScreen =
          x + diameter < 0 || x - diameter > width || y - diameter > height;

        if (isOffScreen) {
          return null;
        }

        // WARNING WARNING WARNING
        // Mutating this.state directly here.
        // This is a faux-pas, but it's important for performance.
        particle.currentPosition = { x, y };
        particle.currentSpin = particle.angle + particle.spinForce * age;
        particle.currentTwist = particle.twistForce
          ? Math.cos(particle.angle + particle.twistForce * age)
          : 1;

        return particle;
      })
      .filter(particle => !!particle);
  };

  render() {
    const { children } = this.props;
    const { particles } = this.state;

    return children({
      // State
      particles,

      // Actions
      generateParticles: this.generateParticles,
    });
  }
}

export default Particles;
