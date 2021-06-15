import React, { Component } from 'react';

class Canvas extends Component {
  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');

    this.scale();
    this.props.draw(this.ctx);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.width !== prevProps.width ||
      this.props.height !== prevProps.height
    ) {
      this.scale();
    }
    this.props.draw(this.ctx);
  }

  scale = () => {
    const ratio = window.devicePixelRatio || 1;

    this.canvas.width = this.props.width * ratio;
    this.canvas.height = this.props.height * ratio;

    this.canvas.style.width = this.props.width + 'px';
    this.canvas.style.height = this.props.height + 'px';

    this.ctx.scale(ratio, ratio);
  };

  render() {
    const { width, height, draw, ...delegatedProps } = this.props;

    return (
      <canvas
        ref={node => (this.canvas = node)}
        width={width}
        height={height}
        {...delegatedProps}
      />
    );
  }
}

export default Canvas;
