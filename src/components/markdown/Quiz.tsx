import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { atom, Provider, useAtom } from 'jotai';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import React from 'react';

const quizScope = Symbol();
const finalAnswersAtom = atom<number[]>([]); //saved previous answers

const currentQuestionAtom = atom(0);
const selectedAnswerAtom = atom(null as number | null); //user selection for current question
const chosenAnswerAtom = atom(
  get => get(finalAnswersAtom)[get(currentQuestionAtom)],
  (get, set, answer_index: number) => {
    const i = get(currentQuestionAtom);
    const finalAnswersClone = [...get(finalAnswersAtom)];
    finalAnswersClone[i] = answer_index;
    set(finalAnswersAtom, finalAnswersClone);
  }
); //submitted answer for the current question; can be directly modified

const submittedAtom = atom(false); //whether or not the current question is currently submitted

const QuizAnswerExplanation = (props: { children: unknown }) => {
  return (
    <div className="text-sm text-gray-700 dark:text-gray-400 no-y-margin">
      {props.children}
    </div>
  );
};
QuizAnswerExplanation.displayName = 'QuizAnswerExplanation';
// Answer choice component
const QuizMCAnswer = props => {
  const [selectedAnswer, setSelectedAnswer] = useAtom(
    selectedAnswerAtom,
    quizScope
  );
  const isSelected = selectedAnswer === props.number;
  const [submitted, setSubmittedValue] = useAtom(submittedAtom, quizScope);
  return (
    <button
      className="flex w-full items-start bg-gray-100 dark:bg-gray-900 rounded-2xl px-4 py-3 text-left focus:outline-none"
      onClick={() => {
        if (selectedAnswer !== props.number) {
          setSelectedAnswer(props.number);
          setSubmittedValue(false);
        } else if (!submitted) {
          setSelectedAnswer(null);
        }
      }}
    >
      <span
        className={classNames(
          'flex-shrink-0 h-6 w-6 rounded-full font-medium inline-flex items-center justify-center',
          isSelected
            ? 'ring-2 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-900 text-gray-100 dark:text-gray-900 font-bold'
            : 'border border-gray-600 text-gray-800 dark:border-gray-500 dark:text-gray-300',
          isSelected &&
            submitted &&
            (props.correct
              ? 'ring-green-600 bg-green-600 dark:ring-green-300 dark:bg-green-300'
              : 'ring-red-600 bg-red-600 dark:ring-red-300 dark:bg-red-300'),
          isSelected &&
            !submitted &&
            'ring-gray-600 bg-gray-600 dark:ring-gray-300 dark:bg-gray-300'
        )}
      >
        {props.number + 1}
      </span>

      <div className="flex-1 ml-3 no-y-margin">
        {React.Children.map(props.children, child => {
          if (child?.type?.displayName == 'QuizAnswerExplanation') {
            if (!child.props.children || !submitted || !isSelected) {
              return null;
            }
          }
          return child;
        })}
      </div>
    </button>
  );
};
QuizMCAnswer.displayName = 'QuizMCAnswer';

const QuizQuestion = props => {
  let num = 0;
  return (
    <div className="space-y-2">
      {React.Children.map(props.children, child => {
        if (child?.type?.displayName === 'QuizMCAnswer') {
          return React.cloneElement(child, {
            number: num++,
          });
        } else {
          return child;
        }
      })}
    </div>
  );
};
QuizQuestion.displayName = 'QuizQuestion';

// needed to use scoped provider
const ActualQuiz = props => {
  const [currentQuestion, setCurrentQuestion] = useAtom(
    currentQuestionAtom,
    quizScope
  );

  const [selectedAnswer, setSelectedAnswer] = useAtom(
    selectedAnswerAtom,
    quizScope
  );
  const finalAnswers = useAtomValue(finalAnswersAtom, quizScope);
  const setChosenAnswer = useUpdateAtom(chosenAnswerAtom, quizScope);
  const [submitted, setSubmitted] = useAtom(submittedAtom, quizScope);
  const handleQuestionChange = (newQuestionIndex: number) => {
    const newAnswer = finalAnswers[newQuestionIndex] ?? null;
    setCurrentQuestion(newQuestionIndex);
    setSubmitted(newAnswer !== null);
    setSelectedAnswer(newAnswer);
  };
  const questionList: React.ReactElement[] = React.Children.map(
    props.children,
    child => {
      if (child?.type?.displayName === 'QuizQuestion') {
        return child;
      } else {
        throw new Error(
          'Children of the Quiz component can only be Quiz.Question'
        );
      }
    }
  );

  return (
    <div className="quiz">
      {questionList[currentQuestion]}

      <div className="flex items-center justify-between mt-4">
        <button
          className="btn"
          disabled={currentQuestion === 0}
          onClick={() => handleQuestionChange(currentQuestion - 1)}
        >
          <ArrowLeftIcon className="-ml-0.5 mr-2 h-4 w-4" /> Previous
        </button>
        <span>
          Question {currentQuestion + 1} of{' '}
          {React.Children.count(props.children)}
        </span>
        <button
          className="btn"
          disabled={
            selectedAnswer === null ||
            (submitted && currentQuestion === questionList.length - 1)
          }
          onClick={() => {
            if (!submitted) {
              setChosenAnswer(selectedAnswer);
              setSubmitted(true);
            } else {
              handleQuestionChange(currentQuestion + 1);
            }
          }}
        >
          {submitted ? 'Next' : 'Submit'}{' '}
          {submitted && <ArrowRightIcon className="-mr-0.5 ml-2 h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

const Quiz = (props): JSX.Element => {
  return (
    <Provider scope={quizScope}>
      <ActualQuiz {...props} />
    </Provider>
  );
};

Quiz.Question = QuizQuestion;
Quiz.Answer = QuizMCAnswer;
Quiz.Explanation = QuizAnswerExplanation;

export default Quiz;
