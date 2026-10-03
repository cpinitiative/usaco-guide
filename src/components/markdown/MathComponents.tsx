export const MATHDIV = props => {
  return (
    <div
      className={props.className}
      data-latex={`$$$${props.latex}$$`}
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  );
};

export const MATHSPAN = props => {
  return (
    <span
      className={props.className}
      data-latex={`$${props.latex}$`}
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  );
};

const meta = {
  MATHDIV,
  MATHSPAN,
};

export default meta;
