import { Dialog, Transition } from '@headlessui/react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import { useQuizOpen } from '../context/QuizGeneratorContext';
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
  const [quiz, setQuiz] = React.useState<Question[]>([
    { question: '', answers: [] },
  ]);
  const [copyText, setCopyText] = React.useState('Copy');
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

  const getCode = () => {
    const code = `<Quiz>
  ${
    quiz
      .map(
        question =>
          `<Quiz.Question>
    ${question.question}
    ${
      question.answers
        .map(
          answer =>
            `<Quiz.Answer${answer.correct ? ' correct' : ''}>
      ${answer.answer}
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
  };
  return (
    <Transition appear show={open} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className={'flex justify-between items-center'}>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Quiz Generator
                </Dialog.Title>
                <button className={'btn'} onClick={() => addQuestion()}>
                  Add question
                </button>
              </div>
              <div className={'space-y-8 mt-4'}>
                {quiz.map((question, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 pl-4 focus-within:border-blue-500 dark:focus-within:border-gray-700"
                  >
                    <label htmlFor={`question-${idx + 1}`}>
                      Question {idx + 1}
                    </label>
                    <input
                      id={`question-${idx + 1}`}
                      type="text"
                      value={question.question}
                      onChange={e => changeQuestion(e.target.value, idx)}
                      className={
                        'mt-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700'
                      }
                    />
                    <div className={'ml-4'}>
                      <h5 className={'font-medium my-2'}>Answers</h5>
                      <div className={'space-y-4'}>
                        {question.answers.map((answer, i) => (
                          <div key={i}>
                            <div className={'w-full flex gap-6 items-center'}>
                              <input
                                type="text"
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
                                  'flex-grow shadow-sm focus:ring-blue-500 focus:border-blue-500 block sm:text-sm border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700'
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
                                  'w-18 md:w-24 focus:ring-blue-500 focus:ring-2 rounded-md focus:outline-none'
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
                                'mt-2 w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 block sm:text-sm border-gray-300 rounded-md transition sm:leading-5 dark:bg-gray-900 dark:border-gray-700'
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
                        ))}
                      </div>
                      <div className={'w-full flex justify-end my-2'}>
                        <button
                          className={'btn'}
                          onClick={() => addAnswer(idx)}
                        >
                          Add answer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className={'relative text-sm'}>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(getCode());
                      setCopyText('Copied!');
                      setTimeout(() => {
                        setCopyText('Copy');
                      }, 3000);
                    }}
                    className="bg-gray-200 focus:ring-blue-500 focus:ring-2 rounded-md focus:outline-none absolute right-3 top-2 px-2 py-1"
                  >
                    {copyText}
                  </button>
                  <CodeBlock className="language-mdx">{getCode()}</CodeBlock>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
