import { Transition, Dialog } from '@headlessui/react';
import React from 'react';
import { useQuizOpen } from '../context/QuizGeneratorContext';

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
  const {open, setOpen} = useQuizOpen();
  const [quiz, setQuiz] = React.useState<Question[]>([{question: "", answers: []}]);
  const closeModal = () => {
    setOpen(false);
    setQuiz([{question: "", answers: []}]);
  }
  
  const editQuiz = (func: (q: Question[]) => Question[]) => {
    let prev = quiz;
    prev = func(prev);
    setQuiz([...prev]);
  }

  const changeQuestion = (newQuestion: string, idx: number) => {
    editQuiz(prev => {
      prev[idx].question = newQuestion;
      return prev;
    })
  }

  const addQuestion = () => {
    editQuiz(prev => {
      prev.push({
        question: "",
        answers: []
      })
      return prev;
    })
  }

  const changeAnswer = (newAnswer: string, questionIdx: number, answerIdx: number) => {
    editQuiz(prev => {
      prev[questionIdx].answers[answerIdx].answer = newAnswer;
      return prev;
    })
  }

  const addAnswer = (questionIdx: number) => {
    editQuiz(prev => {
      prev[questionIdx].answers.push({
        answer: "",
        explanation: "",
        correct: false
      });
      return prev;
    })
  }

  const changeChecked = (checked: boolean, questionIdx: number, answerIdx: number) => {
    editQuiz(prev => {
      prev[questionIdx].answers[answerIdx].correct = checked;
      return prev;
    })
  }

  const changeExplanation = (explanation: string, questionIdx: number, answerIdx: number) => {
    editQuiz(prev => {
      prev[questionIdx].answers[answerIdx].explanation = explanation;
      return prev;
    })
  }
  return (
    <Transition appear show={open} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Quiz Generator
                </Dialog.Title>
                <button className={"btn"} onClick={() => addQuestion()}>Add question</button>
                {quiz.map((question, idx) => (
                  <div key={idx}>
                    <h4>Question {idx + 1}</h4>
                    <input type="text" value={question.question} onChange={(e) => changeQuestion(e.target.value, idx)} />
                    <div className={"ml-4"}>
                      <div className={"flex justify-between"}>
                        <h5>Answers</h5>
                        <button className={"btn"} onClick={() => addAnswer(idx)}>Add answer</button>
                      </div>
                      {question.answers.map((answer, i) => (
                        <div key={i}>
                        <input type="text" value={answer.answer} onChange={(e) => changeAnswer(e.target.value, idx, i)} />
                        <label>
                          <span>Correct</span>
                          <input type="checkbox" checked={answer.correct} onChange={(e) => changeChecked(e.target.checked, idx, i)} />
                        </label>
                        <textarea className={"w-full"} value={answer.explanation} onChange={(e) => changeExplanation(e.target.value, idx, i)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
  );
}
