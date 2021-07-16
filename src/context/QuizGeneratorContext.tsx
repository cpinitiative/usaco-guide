import React from 'react';

const QuizGeneratorContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({ open: false, setOpen: () => false });

const QuizGeneratorProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <QuizGeneratorContext.Provider value={{ open, setOpen }}>
      {children}
    </QuizGeneratorContext.Provider>
  );
};

export const useQuizOpen = () => React.useContext(QuizGeneratorContext);

export default QuizGeneratorProvider;
