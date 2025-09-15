import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import React, { useMemo } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { useQuizOpen } from '../context/QuizGeneratorContext';
import CopyButton from './Editor/CopyButton';
import CodeBlock from './markdown/CodeBlock/CodeBlock';

interface Answer {
  answer: string;
  explanation: string;
  correct: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}

export default function QuizGeneratorModal(): JSX.Element {
  const { open, setOpen } = useQuizOpen();
  const isDarkMode = useDarkMode();
  const [quiz, setQuiz] = React.useState<Question[]>([
    { question: '', answers: [] },
  ]);
  const closeModal = () => {
    setOpen(false);
    setQuiz([{ question: '', answers: [] }]);
  };

  const editQuiz = (func: (q: Question[]) => Question[]) => {
    let prev = quiz;
    prev = func(prev);
    setQuiz([...prev]);
  };

  const changeQuestion = (newQuestion: string, idx: number) => {
    editQuiz(prev => {
      prev[idx].question = newQuestion;
      return prev;
    });
  };

  const addQuestion = () => {
    editQuiz(prev => {
      prev.push({
        question: '',
        answers: [],
      });
      return prev;
    });
  };

  const deleteQuestion = (questionIdx: number) => {
    editQuiz(prev => {
      prev.splice(questionIdx, 1);
      return prev;
    });
  };

  const addAnswer = (questionIdx: number) => {
    editQuiz(prev => {
      prev[questionIdx].answers.push({
        answer: '',
        explanation: '',
        correct: false,
      });
      return prev;
    });
  };

  const deleteAnswer = (questionIdx: number, answerIdx: number) => {
    editQuiz(prev => {
      prev[questionIdx].answers.splice(answerIdx, 1);
      return prev;
    });
  };

  const changeAnswer = (
    newAnswer: string,
    newExplanation: string,
    newCorrect: boolean,
    questionIdx: number,
    answerIdx: number
  ) => {
    editQuiz(prev => {
      prev[questionIdx].answers[answerIdx].answer = newAnswer;
      prev[questionIdx].answers[answerIdx].explanation = newExplanation;
      prev[questionIdx].answers[answerIdx].correct = newCorrect;
      return prev;
    });
  };

  const code = useMemo(() => {
    const code = `<Quiz>
  ${
    quiz
      .map(
        question =>
          `<Quiz.Question>
    ${question.question.replace(/\n/g, '\n    ') /* 4 spaces */}
    ${
      question.answers
        .map(
          answer =>
            `<Quiz.Answer${answer.correct ? ' correct' : ''}>
      ${answer.answer.replace(/\n/g, '\n      ') /* 6 spaces */}
      <Quiz.Explanation>
        ${answer.explanation.replace(/\n/g, '\n        ') /* 8 spaces */}
      </Quiz.Explanation>
    </Quiz.Answer>`
        )
        .join('\n    ') /* 4 spaces */
    }
  </Quiz.Question>`
      )
      .join('\n  ') /* 2 spaces */
  }
</Quiz>`;
    return code;
  }, [quiz]);
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-30"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:bg-gray-900/75"
      />

      <div className="fixed inset-0 z-30 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel
            transition
            className="h-auto w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 dark:bg-black"
          >
            <div className={'flex items-center justify-between'}>
              <DialogTitle
                as="h3"
                className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200"
              >
                Quiz Generator
              </DialogTitle>
              <button className={'btn'} onClick={() => addQuestion()}>
                Add question
              </button>
            </div>
            <div className={'mt-4 space-y-8'}>
              {quiz.map((question, idx) => (
                <div
                  key={idx}
                  className="flex border-l-4 focus-within:border-blue-500 dark:border-gray-800 dark:focus-within:border-blue-900"
                >
                  <div className={'mx-2'}>
                    <button onClick={() => deleteQuestion(idx)}>
                      <XIcon className={'h-4 w-4'} />
                    </button>
                  </div>
                  <div className={'grow'}>
                    <label htmlFor={`question-${idx + 1}`}>
                      Question {idx + 1}
                    </label>
                    <textarea
                      id={`question-${idx + 1}`}
                      value={question.question}
                      onChange={e => changeQuestion(e.target.value, idx)}
                      className={
                        'mt-2 block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900'
                      }
                    />
                    <div className={'ml-4'}>
                      <h5 className={'my-2 font-medium'}>Answers</h5>
                      <div className={'space-y-4'}>
                        {question.answers.map((answer, i) => (
                          <div key={i} className={'flex'}>
                            <div className={'mr-1'}>
                              <button onClick={() => deleteAnswer(idx, i)}>
                                <XIcon className={'h-4 w-4'} />
                              </button>
                            </div>
                            <div className={'w-full'}>
                              <div className={'flex w-full items-center gap-6'}>
                                <textarea
                                  value={answer.answer}
                                  onChange={e =>
                                    changeAnswer(
                                      e.target.value,
                                      answer.explanation,
                                      answer.correct,
                                      idx,
                                      i
                                    )
                                  }
                                  className={
                                    'block grow rounded-md border-gray-300 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900'
                                  }
                                  placeholder={`Answer ${i + 1}`}
                                />
                                <button
                                  onClick={() =>
                                    changeAnswer(
                                      answer.answer,
                                      answer.explanation,
                                      !answer.correct,
                                      idx,
                                      i
                                    )
                                  }
                                  className={
                                    'w-18 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-hidden md:w-24'
                                  }
                                >
                                  {quiz[idx].answers[i].correct ? (
                                    <div
                                      className={
                                        'flex items-center gap-2 text-green-600 dark:text-green-300'
                                      }
                                    >
                                      <CheckCircleIcon
                                        className={'h-4 w-4 md:h-6 md:w-6'}
                                      />
                                      <span className={'text-xs md:text-sm'}>
                                        Correct
                                      </span>
                                    </div>
                                  ) : (
                                    <div
                                      className={
                                        'flex items-center gap-2 text-red-600 dark:text-red-300'
                                      }
                                    >
                                      <XCircleIcon
                                        className={'h-4 w-4 md:h-6 md:w-6'}
                                      />
                                      <span className={'text-xs md:text-sm'}>
                                        Incorrect
                                      </span>
                                    </div>
                                  )}
                                </button>
                              </div>
                              <textarea
                                className={
                                  'mt-2 block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900'
                                }
                                value={answer.explanation}
                                onChange={e =>
                                  changeAnswer(
                                    answer.answer,
                                    e.target.value,
                                    answer.correct,
                                    idx,
                                    i
                                  )
                                }
                                placeholder={'Explanation'}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className={'my-2 flex w-full justify-end'}>
                        <button
                          className={'btn'}
                          onClick={() => addAnswer(idx)}
                        >
                          Add answer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className={'relative text-sm'}>
                <CopyButton
                  onClick={() => {
                    navigator.clipboard.writeText(code);
                  }}
                  className="btn absolute top-2 right-3"
                />
                <CodeBlock className="language-mdx" isDarkMode={isDarkMode}>
                  {code}
                </CodeBlock>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
