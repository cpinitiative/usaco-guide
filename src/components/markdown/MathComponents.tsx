import * as React from 'react';

function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/\s*on\w+\s*=\s*(".*?"|'.*?'|[^\s>]+)/gi, '');
}

export interface MathProps {
  latex: string;
  className?: string;
  children?: React.ReactNode;
}

export const MATHDIV = (props: MathProps) => {
  const latex = (props.latex || '').replace(/[<>]/g, '');
  const childHtml = typeof props.children === 'string' ? sanitizeHtml(props.children as string) : '';
  return (
    <div
      className={props.className}
      data-latex={`$$$${latex}$$`}
      dangerouslySetInnerHTML={{ __html: childHtml }}
    />
  );
};

export const MATHSPAN = (props: MathProps) => {
  const latex = (props.latex || '').replace(/[<>]/g, '');
  const childHtml = typeof props.children === 'string' ? sanitizeHtml(props.children as string) : '';
  return (
    <span
      className={props.className}
      data-latex={`$${latex}$`}
      dangerouslySetInnerHTML={{ __html: childHtml }}
    />
  );
};

const mathComponents = {
  MATHDIV,
  MATHSPAN,
};

export default mathComponents;
