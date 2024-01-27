import { Dialog } from '@headlessui/react';
import { useSetAtom } from 'jotai';
import React, { useContext, useRef, useState } from 'react';
import Select from 'react-select';
import { createNewInternalSolutionFileAtom } from '../../atoms/editor';
import { DarkModeContext } from '../../context/DarkModeContext';
import { AlgoliaEditorSolutionFile } from '../../models/algoliaEditorFile';
import Modal from '../Modal';
export default function AddFileModal(props) {
  const darkMode = useContext(DarkModeContext);
  const [division, setDivision] = useState('');
  const fileNameRef = useRef<HTMLInputElement>(null);
  const createSol = useSetAtom(createNewInternalSolutionFileAtom);
  console.log(division);
  return (
    <Modal {...props}>
      <Dialog.Panel className="bg-white dark:bg-black w-full max-w-xl dark:text-white p-5 rounded-lg shadow-lg flex flex-col items-start">
        <h3 className="text-lg font-bold">Problem ID</h3>
        <p>File Name</p>
        <input
          type="text"
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700"
          placeholder="Unique id (e.g. usaco-1234)"
          ref={fileNameRef}
        />
        <p className="mt-2">Problem Division</p>
        <div className="mt-2 relative w-full dark:bg-black rounded-md shadow-sm">
          <Select
            options={[
              'General',
              'Bronze',
              'Silver',
              'Gold',
              'Platinum',
              'Advanced',
            ].map(div => ({
              label: div,
              value: div.toLowerCase(),
            }))}
            onChange={e => setDivision(e.value)}
            className="tw-forms-disable text-left"
            styles={
              !darkMode
                ? undefined
                : {
                    control: provided => ({
                      ...provided,
                      backgroundColor: '#111827',
                      borderColor: '#374151',
                    }),
                    menuList: provided => ({
                      ...provided,
                      borderColor: '#374151',
                      borderWidth: '1px',
                      borderRadius: '6px',
                    }),
                    menu: provided => ({
                      ...provided,
                      backgroundColor: '#111827',
                    }),
                    indicatorSeparator: provided => ({
                      ...provided,
                      backgroundColor: '#374151',
                    }),
                    indicatorsContainer: provided => ({
                      ...provided,
                      color: '#374151',
                    }),
                    singleValue: provided => ({
                      ...provided,
                      color: 'rgba(255, 255, 255, 0.87)',
                    }),
                    input: provided => ({
                      ...provided,
                      color: 'rgba(255, 255, 255, 0.87)',
                    }),
                    option: (provided, { isFocused, isSelected }) => ({
                      ...provided,
                      ...(isFocused
                        ? {
                            backgroundColor: '#4d94ff',
                          }
                        : isSelected
                        ? { backgroundColor: '#0063e6' }
                        : {}),
                    }),
                  }
            }
          />
        </div>
        <button
          className="btn mt-2"
          onClick={() => {
            props.onClose();
            createSol({
              id: fileNameRef.current.value,
              division,
              problemModules: [],
            } as AlgoliaEditorSolutionFile);
          }}
        >
          Add File
        </button>
      </Dialog.Panel>
    </Modal>
  );
}
