import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import React from 'react';

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  bg?: string;
};

export default function Modal({
  children,
  isOpen,
  onClose,
  bg = 'bg-black/25',
}: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop className={`fixed inset-0 ${bg} dark:bg-black/50`} />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:border dark:border-gray-700 dark:bg-gray-900">
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
