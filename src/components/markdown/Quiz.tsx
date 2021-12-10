import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { atom, Provider, useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';
import React from 'react';

const quizScope = Symbol();
const currentQuestionAtom = atom(0);
const selectedAnswerAtom = atom(null as number | null);
const chosenAnswerAtom = atom(null as number | null);

const QuizAnswerExplanation = props => {
  const chosenAnswer = useAtomValue(chosenAnswerAtom, quizScope);
  if (chosenAnswer === null) {
    return null;
  }
  return (
    <div className="text-sm text-gray-700 dark:text-gray-400 no-y-margin">
      {props.children}
    </div>
  );
};

const QuizMCAnswer = props => {
  const [selectedAnswer, setSelectedAnswer] = useAtom(
    selectedAnswerAtom,
    quizScope
  );
  const chosenAnswer = useAtomValue(chosenAnswerAtom, quizScope);
  const isSelected = selectedAnswer === props.number;
  const showCorrect = chosenAnswer !== null;
  return (
    <button
      className="flex w-full items-start bg-gray-100 dark:bg-gray-900 rounded-2xl px-4 py-3 text-left focus:outline-none"
      disabled={showCorrect}
      onClick={() => setSelectedAnswer(props.number)}
    >
      <span
        className={classNames(
          'flex-shrink-0 h-6 w-6 rounded-full font-medium inline-flex items-center justify-center',
          isSelected
            ? 'ring-2 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-900 text-gray-100 dark:text-gray-900 font-bold'
            : 'border border-gray-600 text-gray-800 dark:border-gray-500 dark:text-gray-300',
          isSelected &&
            showCorrect &&
            (props.correct
              ? 'ring-green-600 bg-green-600 dark:ring-green-300 dark:bg-green-300'
              : 'ring-red-600 bg-red-600 dark:ring-red-300 dark:bg-red-300'),
          isSelected &&
            !showCorrect &&
            'ring-gray-600 bg-gray-600 dark:ring-gray-300 dark:bg-gray-300'
        )}
      >
        {props.number}
      </span>
      <div className="flex-1 ml-3 no-y-margin">{props.children}</div>
    </button>
  );
};
QuizMCAnswer.displayName = 'QuizMCAnswer';

const QuizQuestion = props => {
  const currentQuestion = useAtomValue(currentQuestionAtom, quizScope);

  if (currentQuestion !== props.number) {
    return null;
  }

  let num = 1;
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
  const [chosenAnswer, setChosenAnswer] = useAtom(chosenAnswerAtom, quizScope);

  const handleQuestionChange = newVal => {
    setCurrentQuestion(newVal);
    setChosenAnswer(null);
    setSelectedAnswer(null);
  };

  let num = 0;
  return (
    <div className="quiz">
      {React.Children.map(props.children, child => {
        if (child?.type?.displayName === 'QuizQuestion') {
          return React.cloneElement(child, {
            number: num++,
          });
        } else {
          throw new Error(
            'Children of the Quiz component can only be Quiz.Question'
          );
        }
      })}

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
            (chosenAnswer !== null && currentQuestion === num - 1)
          }
          onClick={() => {
            if (chosenAnswer === null) {
              setChosenAnswer(selectedAnswer);
            } else {
              handleQuestionChange(currentQuestion + 1);
            }
          }}
        >
          {chosenAnswer ? 'Next' : 'Submit'}{' '}
          {chosenAnswer && <ArrowRightIcon className="-mr-0.5 ml-2 h-4 w-4" />}
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
