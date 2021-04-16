import * as React from 'react';
import { createContext, useState } from 'react';
import ContactUsSlideover from '../components/ContactUsSlideover/ContactUsSlideover';

const ContactUsSlideoverContext = createContext<{
  isContactUsSlideoverOpen: boolean;
  setIsContactUsSlideoverOpen: (boolean) => void;
}>({
  isContactUsSlideoverOpen: false,
  setIsContactUsSlideoverOpen: x => {},
});

export default ContactUsSlideoverContext;

export const ContactUsSlideoverProvider = ({ children }) => {
  const [isContactUsSlideoverOpen, setIsContactUsSlideoverOpen] = useState(
    false
  );
  return (
    <ContactUsSlideoverContext.Provider
      value={{
        isContactUsSlideoverOpen,
        setIsContactUsSlideoverOpen,
      }}
    >
      {children}

      <ContactUsSlideover
        isOpen={isContactUsSlideoverOpen}
        onClose={() => setIsContactUsSlideoverOpen(false)}
      />
    </ContactUsSlideoverContext.Provider>
  );
};
