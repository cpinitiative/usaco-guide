import { Component, createRef, type CanvasHTMLAttributes } from 'react';

type CanvasProps = Omit<CanvasHTMLAttributes<HTMLCanvasElement>, 'width' | 'height'> & {
  width: number;
  height: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

class Canvas extends Component<CanvasProps> {
  private canvasRef = createRef<HTMLCanvasElement>();
  private ctx: CanvasRenderingContext2D | null = null;

  componentDidMount() {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.ctx = ctx;
    this.scale();
    this.props.draw(ctx);
  }

  componentDidUpdate(prevProps: CanvasProps) {
    if (!this.ctx) return;

    if (
      this.props.width !== prevProps.width ||
      this.props.height !== prevProps.height
    ) {
      this.scale();
    }

    this.props.draw(this.ctx);
  }

  scale = () => {
    const canvas = this.canvasRef.current;
    if (!canvas || !this.ctx) return;

    const ratio = window.devicePixelRatio || 1;

    canvas.width = this.props.width * ratio;
    canvas.height = this.props.height * ratio;

    canvas.style.width = `${this.props.width}px`;
    canvas.style.height = `${this.props.height}px`;

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(ratio, ratio);
  };

  render() {
    const { width, height, draw, ...delegatedProps } = this.props;

    return (
      <canvas
        ref={this.canvasRef}
        width={width}
        height={height}
        {...delegatedProps}
      />
    );
  }
}


export default Canvas;
