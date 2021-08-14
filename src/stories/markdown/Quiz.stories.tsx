import React from 'react';
import Quiz from '../../components/markdown/Quiz';

export default {
  title: 'Markdown/Quiz',
};

export const Default = (): JSX.Element => (
  <Quiz>
    <Quiz.Question>
      <p>Question 1</p>
      <Quiz.Answer>
        Answer 1<Quiz.Explanation>Explanation 1</Quiz.Explanation>
      </Quiz.Answer>
      <Quiz.Answer correct>
        Answer 2<Quiz.Explanation>Explanation 2</Quiz.Explanation>
      </Quiz.Answer>
    </Quiz.Question>
    <Quiz.Question>
      <p>Question 2</p>
      <Quiz.Answer>
        Answer 1<Quiz.Explanation>Explanation 1</Quiz.Explanation>
      </Quiz.Answer>
      <Quiz.Answer correct>
        Answer 2<Quiz.Explanation>Explanation 2</Quiz.Explanation>
      </Quiz.Answer>
    </Quiz.Question>
  </Quiz>
);
