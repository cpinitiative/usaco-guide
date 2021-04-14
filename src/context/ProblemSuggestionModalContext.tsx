import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import ProblemSuggestionModal from '../components/ProblemSuggestionModal';
import { EditorContext } from './EditorContext';
import UserDataContext from './UserDataContext/UserDataContext';

const ProblemSuggestionModalContext = createContext<{
  openProblemSuggestionModal: (listName: string) => void;
}>({
  openProblemSuggestionModal: (listName: string) => {
    // Do Nothing
  },
});

export default ProblemSuggestionModalContext;

export const ProblemSuggestionModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listName, setListName] = useState<string>(null);
  const { firebaseUser } = useContext(UserDataContext);
  const { inEditor } = useContext(EditorContext);
  const openProblemSuggestionModal = (listName: string) => {
    if (!firebaseUser && !inEditor) {
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
