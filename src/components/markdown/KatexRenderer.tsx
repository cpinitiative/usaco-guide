import * as React from 'react';
import renderMathInElement from 'katex/contrib/auto-render/auto-render';

type KatexRendererProps = {
  children?: React.ReactChildren;
};

export function KatexRenderer(props: KatexRendererProps) {
  const ref = React.useRef();

  React.useEffect(() => {
    renderMathInElement(ref.current, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
      ],
    });
  }, [props.children]);

  return <div ref={ref}>{props.children}</div>;
}
