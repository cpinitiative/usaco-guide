import { Dialog } from '@headlessui/react';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import Modal, { ModalProps } from '../components/Modal';
import { DarkModeContext } from '../context/DarkModeContext';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = args => {
  const [modalOpen, setModalOpen] = React.useState(args.isOpen ?? false);
  const darkMode = React.useContext(DarkModeContext);
  return (
    <div className="flex items-center justify-center">
      <button onClick={() => setModalOpen(true)} className="btn">
        Open Modal
      </button>
      <Modal {...args} isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Dialog.Panel className={`w-full max-w-md ${darkMode ? 'dark' : ''}`}>
          <div className="bg-white dark:bg-black dark:text-white p-5 rounded-lg shadow-lg flex flex-col items-start">
            <Dialog.Title as="h3" className="text-lg font-bold">
              Modal Title
            </Dialog.Title>
            <Dialog.Description>Modal Description</Dialog.Description>
            <button onClick={() => setModalOpen(false)} className="btn">
              Close
            </button>
          </div>
        </Dialog.Panel>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};
