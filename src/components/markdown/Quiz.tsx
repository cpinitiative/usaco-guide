import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import {
  atom,
  Provider,
  useAtom,
  useAtomValue,
  useSetAtom,
  useStore,
} from 'jotai';
import React from 'react';

const finalAnswersAtom = atom<number[]>([]); //saved previous answers

const currentQuestionAtom = atom(0);
const selectedAnswerAtom = atom(null as number | null); //user selection for current question
const correctAnswersAtom = atom([] as number[]); //correct selection(s) for current question

const handleSubmittedAnswerAtom = atom(
  null,
  (get, set, answer_index: number) => {
    set(finalAnswersAtom, prv => {
      const i = get(currentQuestionAtom);
      const finalAnswersClone = [...prv];
      finalAnswersClone[i] = answer_index;
      return finalAnswersClone;
      // code below doesn't work for some reason
      // probably because it's not a deep clone
      // prv[get(currentQuestionAtom)] = answer_index;
      // return prv;
    });
  }
); //updates the finalAnswersArray upon question submit

const submittedAtom = atom(false); //whether or not the current question is currently submitted

const QuizAnswerExplanation = (props: { children?: React.ReactNode }) => {
  return (
    <div className="no-y-margin text-sm text-gray-700 dark:text-gray-400">
      {props.children}
    </div>
  );
};
QuizAnswerExplanation.displayName = 'QuizAnswerExplanation';
// Answer choice component
const QuizMCAnswer = props => {
  const store = useStore();
  const [selectedAnswer, setSelectedAnswer] = useAtom(selectedAnswerAtom, {
    store,
  });
  const isSelected = selectedAnswer === props.number;
  const [submitted, setSubmittedValue] = useAtom(submittedAtom, { store });
  const correctAnswers = useAtomValue(correctAnswersAtom, { store });
  const showVerdict =
    submitted && (isSelected || correctAnswers.includes(selectedAnswer ?? -1)); //display correctness/explanation
  const isCorrect = submitted && correctAnswers.includes(selectedAnswer ?? -1);
  const Element = isCorrect ? 'div' : 'button';
  return (
    <Element
      className="flex w-full items-start rounded-2xl bg-gray-100 px-4 py-3 text-left focus:outline-hidden dark:bg-gray-900"
      onClick={() => {
        if (!showVerdict) {
          if (selectedAnswer !== props.number) {
            // switch answers
            setSelectedAnswer(props.number);
            setSubmittedValue(false);
          } else if (!submitted) {
            //unselect current choice
            setSelectedAnswer(null);
          }
        }
      }}
    >
      <span
        className={classNames(
          'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-medium',
          isSelected || showVerdict //render ring
            ? 'font-bold text-gray-100 ring-2 ring-offset-2 ring-offset-gray-100 dark:text-gray-900 dark:ring-offset-gray-900'
            : 'border border-gray-600 text-gray-800 dark:border-gray-500 dark:text-gray-300',
          showVerdict &&
            (props.correct
              ? 'bg-green-600 ring-green-600 dark:bg-green-300 dark:ring-green-300'
              : 'bg-red-600 ring-red-600 dark:bg-red-300 dark:ring-red-300'),
          isSelected &&
            !submitted &&
            'bg-gray-600 ring-gray-600 dark:bg-gray-300 dark:ring-gray-300'
        )}
      >
        {props.number + 1}
      </span>

      <div className={classNames('no-y-margin ml-3 flex-1')}>
        {React.Children.map(props.children, child => {
          if (child?.type?.displayName == 'QuizAnswerExplanation') {
            if (!child.props.children || !showVerdict) {
              return null;
            }
          }
          if (!isCorrect && child?.type?.name == 'pre') {
            return React.cloneElement(child, { copyButton: false });
          }
          return child;
        })}
      </div>
    </Element>
  );
};
QuizMCAnswer.displayName = 'QuizMCAnswer';

const QuizQuestion = props => {
  const store = useStore();
  const setCorrectAnswers = useSetAtom(correctAnswersAtom, { store });
  React.useEffect(() => {
    const correctAnswers: number[] = [];
    let answerNum = 0;
    React.Children.map(props.children, child => {
      if (child?.type?.displayName === 'QuizMCAnswer') {
        if (child.props.correct) correctAnswers.push(answerNum);
        answerNum++;
      }
    });
    setCorrectAnswers(correctAnswers);
  }, []);

  let num = 0;
  const answerChoices = React.Children.map(props.children, child => {
    if (child?.type?.displayName === 'QuizMCAnswer') {
      return React.cloneElement(child, {
        number: num++,
      });
    } else {
      return child;
    }
  });
  return <div className="space-y-2">{answerChoices}</div>;
};
QuizQuestion.displayName = 'QuizQuestion';

// needed to use scoped provider
const ActualQuiz = props => {
  const store = useStore();
  const [currentQuestion, setCurrentQuestion] = useAtom(currentQuestionAtom, {
    store,
  });

  const [selectedAnswer, setSelectedAnswer] = useAtom(selectedAnswerAtom, {
    store,
  });
  const finalAnswers = useAtomValue(finalAnswersAtom, { store });
  const submitAnswer = useSetAtom(handleSubmittedAnswerAtom, { store });
  const [submitted, setSubmitted] = useAtom(submittedAtom, { store });
  const canMoveOn = submitted || selectedAnswer === null; //if you can move on to the next question

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

      <div className="mt-4 flex items-center justify-between">
        <button
          className="btn"
          disabled={currentQuestion === 0}
          onClick={() => handleQuestionChange(currentQuestion - 1)}
        >
          <ArrowLeftIcon className="mr-2 -ml-0.5 h-4 w-4" /> Previous
        </button>
        <span>
          Question {currentQuestion + 1} of{' '}
          {React.Children.count(props.children)}
        </span>
        <button
          className="btn"
          disabled={canMoveOn && currentQuestion === questionList.length - 1}
          onClick={() => {
            if (!canMoveOn) {
              submitAnswer(selectedAnswer);
              setSubmitted(true);
            } else {
              handleQuestionChange(currentQuestion + 1);
            }
          }}
        >
          {selectedAnswer === null ? 'Skip' : submitted ? 'Next' : 'Submit'}{' '}
          {canMoveOn && <ArrowRightIcon className="-mr-0.5 ml-2 h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

const Quiz = (props): JSX.Element => {
  return (
    <Provider>
      <ActualQuiz {...props} />
    </Provider>
  );
};

Quiz.Question = QuizQuestion;
Quiz.Answer = QuizMCAnswer;
Quiz.Explanation = QuizAnswerExplanation;

export default Quiz;
