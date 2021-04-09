import React from 'react';
import HTMLComponents from '../../components/markdown/HTMLComponents';

const MiscMarkdownContet = () => (
  <>
    <HTMLComponents.p>
      This is a demonstration of a warning block. And here's a link:{' '}
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noreferrer"
      >
        Hello World!
      </a>
      .
    </HTMLComponents.p>
    <HTMLComponents.p>
      You shouldn't modify sets when traversing it with set iterators like in
      any other iterators for{' '}
      <HTMLComponents.inlineCode>Collections</HTMLComponents.inlineCode> (this{' '}
      <strong>INCLUDES</strong> when using a for-each loop). The only
      modification possible is using the iterator{' '}
      <HTMLComponents.inlineCode>remove()</HTMLComponents.inlineCode> method
      which can only be used once before calling the{' '}
      <HTMLComponents.inlineCode>next()</HTMLComponents.inlineCode> method.
    </HTMLComponents.p>
  </>
);

export default MiscMarkdownContet;
