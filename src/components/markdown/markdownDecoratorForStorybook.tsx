import React from 'react';

const markdownDecorator = Story => (
  <div className="markdown">
    <Story />
  </div>
);

export default markdownDecorator;
