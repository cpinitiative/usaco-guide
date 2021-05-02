import React from 'react';
import HTMLComponents from '../../components/markdown/HTMLComponents';

const MiscMarkdownContent = () => (
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
      <HTMLComponents.code>Collections</HTMLComponents.code> (this{' '}
      <strong>INCLUDES</strong> when using a for-each loop). The only
      modification possible is using the iterator{' '}
      <HTMLComponents.code>remove()</HTMLComponents.code> method which can only
      be used once before calling the{' '}
      <HTMLComponents.code>next()</HTMLComponents.code> method.
    </HTMLComponents.p>
    <p>
      <a
        target="_blank"
        href="https://arxiv.org/pdf/1904.01210.pdf"
        rel="nofollow noopener noreferrer"
      >
        Paper
      </a>
    </p>
    <blockquote>
      <HTMLComponents.p>
        A common mistake in implementing the Floyd–Warshall algorithm is to
        misorder the triply nested loops (The correct order is{' '}
        <HTMLComponents.code>KIJ</HTMLComponents.code>). The incorrect{' '}
        <HTMLComponents.code>IJK</HTMLComponents.code> and
        <HTMLComponents.code>IKJ</HTMLComponents.code> algorithms do not give
        correct solutions for some instance. However, we can prove that if these
        are repeated three times, we obtain the correct solutions.
      </HTMLComponents.p>
      <HTMLComponents.p>
        It would be emphasized that these fixes (repeating incorrect algorithms
        three times) have the same time complexity as the correct Floyd–Warshall
        algorithm up to constant factors. Therefore, our results suggest that,
        if one is confused by the order of the triply nested loops, one can
        repeat the procedure three times just to be safe.
      </HTMLComponents.p>
    </blockquote>
    <HTMLComponents.p>Another paragraph</HTMLComponents.p>
    <ul>
      <li>USACO Camp - "Cows Play Global Thermonuclear War" (2D case)</li>
    </ul>
  </>
);

export default MiscMarkdownContent;
