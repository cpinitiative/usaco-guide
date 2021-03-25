import * as React from 'react';
import FirebaseContext from '../../../context/FirebaseContext';
import { useContext, useState } from 'react';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import Transition from '../../Classes/TailwindTransition';
import ButtonGroup from '../../ButtonGroup';
import { LANGUAGE_LABELS } from '../../../context/UserDataContext/properties/userLang';
import { Problem } from '../../../models/problem';

export default function SubmitCodeButton({ problem }: { problem: Problem }) {
  const firebase = useContext(FirebaseContext);
  const { firebaseUser, lang } = useContext(UserDataContext);
  const [codeLang, setCodeLang] = useState(lang);
  const [code, setCode] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showSubmitCodeModal, setShowSubmitCodeModal] = useState(false);
  return (
    <>
      <Transition
        show={showSubmitCodeModal}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Submit Solution Code for <i>{problem.name}</i>
                    </h3>
                    <div className="mt-2">
                      <ButtonGroup
                        options={['cpp', 'java', 'py']}
                        labelMap={LANGUAGE_LABELS}
                        value={codeLang}
                        onChange={x => setCodeLang(x)}
                      />

                      <div className="rounded-md shadow-sm mt-3">
                        <textarea
                          rows={10}
                          className="form-textarea block w-full transition text-sm font-mono sm:leading-5 dark:bg-gray-900 dark:border-gray-700"
                          value={code}
                          onChange={e => setCode(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    disabled={submitting}
                    type="button"
                    className={
                      submitting
                        ? 'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-300 text-base font-medium text-white sm:col-start-2 sm:text-sm'
                        : 'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm'
                    }
                    onClick={() => {
                      setSubmitting(true);
                      firebase
                        .firestore()
                        .collection('users')
                        .doc(firebaseUser.uid)
                        .update({
                          codeSubmissions: firebase.firestore.FieldValue.arrayUnion(
                            {
                              lang: codeLang,
                              id: problem.uniqueID,
                              name: problem.name,
                              timestamp: new Date(),
                              code,
                            }
                          ),
                        })
                        .then(() => {
                          setSubmitting(false);
                          setShowSubmitCodeModal(false);
                        });
                    }}
                  >
                    {submitting ? 'Submitting...' : 'Submit'}
                  </button>
                  <button
                    disabled={submitting}
                    type="button"
                    className={
                      submitting
                        ? 'mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-300 text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:col-start-1 sm:text-sm'
                        : 'mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm'
                    }
                    onClick={() => setShowSubmitCodeModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </Transition>

      <button
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => {
          setShowSubmitCodeModal(true);
        }}
      >
        Submit
      </button>
    </>
  );
}
