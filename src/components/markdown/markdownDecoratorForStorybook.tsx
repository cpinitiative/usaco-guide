const markdownDecorator = (Story: React.ComponentType) => (
  <div className="markdown">
    <Story />
  </div>
);

export default markdownDecorator;
