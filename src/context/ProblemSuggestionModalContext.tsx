import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import ProblemSuggestionModal from '../components/ProblemSuggestionModal';
import UserDataContext from './UserDataContext/UserDataContext';

const ProblemSuggestionModalContext = createContext<{
  openProblemSuggestionModal: (listName: string) => void;
}>({
  openProblemSuggestionModal: x => {},
});

export default ProblemSuggestionModalContext;

export const ProblemSuggestionModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listName, setListName] = useState<string>(null);
  const { firebaseUser } = useContext(UserDataContext);

  const openProblemSuggestionModal = (listName: string) => {
    if (!firebaseUser) {
      alert('You need to be signed in to suggest problems!');
      return;
    }
    setListName(listName);
    setIsOpen(true);
  };

  React.useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <ProblemSuggestionModalContext.Provider
      value={{
        openProblemSuggestionModal,
      }}
    >
      {children}

      <ProblemSuggestionModal
        listName={listName}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </ProblemSuggestionModalContext.Provider>
  );
};
