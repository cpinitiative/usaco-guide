import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Timestamp } from 'firebase/firestore';
import * as React from 'react';
import Flatpickr from 'react-flatpickr';
import { JoinGroupLink } from '../../../models/groups/groups';
import Switch from '../../elements/Switch';
import Tooltip from '../../Tooltip/Tooltip';

export default function EditJoinLinkModal({
  isOpen,
  onClose,
  onSave,
  link: initialLink,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (link: JoinGroupLink | null) => any;
  link: JoinGroupLink;
}) {
  const [link, setLink] = React.useState<JoinGroupLink>(initialLink);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    setLink(initialLink);
  }, [initialLink]);

  const editLink = (updates: Partial<JoinGroupLink>) => {
    setLink({
      ...link,
      ...updates,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(link);
    onClose();
  };

  const today = new Date();
  const initialExpirationTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  );

  if (!link) return null;

  return (
    <Dialog className="relative z-30" open={isOpen} onClose={() => onClose()}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:bg-gray-900/75"
      />

      <div className="fixed inset-0 z-30 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="dark:bg-dark-surface relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <form onSubmit={handleSubmit}>
              <div>
                <h3
                  className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
                  id="modal-headline"
                >
                  Join Link
                </h3>
                <div className="mt-6">
                  <div className="flex items-center rounded-sm bg-gray-50 p-4 dark:bg-gray-800">
                    <span className="flex-1">
                      https://usaco.guide/groups/join?key={link.id}
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        setCopied(true);
                        navigator.clipboard.writeText(
                          `https://usaco.guide/groups/join?key=${link.id}`
                        );
                      }}
                      className="focus:outline-hidden"
                    >
                      <Tooltip
                        content={copied ? 'Copied!' : 'Copy to Clipboard'}
                        onHidden={() => setCopied(false)}
                        hideOnClick={false}
                      >
                        <svg
                          className="h-6 w-6 shrink-0 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                          />
                        </svg>
                      </Tooltip>
                    </button>
                  </div>

                  <div className="h-6" />

                  <div>
                    <div>
                      <li className="flex items-center justify-between py-2">
                        <div className="flex flex-col">
                          <p className="font-medium text-gray-700 dark:text-gray-200">
                            Limit maximum number of uses
                          </p>
                        </div>
                        <Switch
                          checked={link.maxUses !== null}
                          onChange={b => editLink({ maxUses: b ? 1 : null })}
                        />
                      </li>
                      {link.maxUses !== null && (
                        <div className="mb-4">
                          <label
                            htmlFor="link_uses"
                            className="block text-sm font-medium text-gray-500 dark:text-gray-300"
                          >
                            Max Uses
                          </label>
                          <div className="mt-1">
                            <input
                              type="number"
                              min={1}
                              name="link_uses"
                              id="link_uses"
                              value={link.maxUses}
                              onChange={e =>
                                editLink({ maxUses: parseInt(e.target.value) })
                              }
                              className="input"
                              required
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <li className="flex items-center justify-between py-2">
                        <div className="flex flex-col">
                          <p className="font-medium text-gray-700 dark:text-gray-200">
                            Set expiration time
                          </p>
                        </div>
                        <Switch
                          checked={link.expirationTime !== null}
                          onChange={b =>
                            editLink({
                              expirationTime: b
                                ? Timestamp.fromDate(initialExpirationTime)
                                : null,
                            })
                          }
                        />
                      </li>
                      {link.expirationTime !== null && (
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-500 dark:text-gray-300">
                            Expiry Date
                          </label>

                          <div className="mt-1">
                            <Flatpickr
                              placeholder={'Choose an expiry date date'}
                              options={{
                                dateFormat:
                                  'Expires on'.split('').join('\\\\') +
                                  ' l, F J, Y, h:i K ' +
                                  [
                                    '',
                                    ...(
                                      'UTC' +
                                      // sign is reversed for some reason
                                      (new Date().getTimezoneOffset() > 0
                                        ? '-'
                                        : '+') +
                                      Math.abs(new Date().getTimezoneOffset()) /
                                        60
                                    ).split(''),
                                  ].join('\\\\'),
                                enableTime: true,
                              }}
                              value={link.expirationTime?.toDate()}
                              onChange={date =>
                                editLink({
                                  expirationTime: Timestamp.fromDate(date[0]),
                                })
                              }
                              className="input"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between space-x-4">
                <div className="space-x-4">
                  <button type="submit" className="btn-primary">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => onClose()}
                  >
                    Cancel
                  </button>
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    if (
                      !link.revoked &&
                      confirm('Are you sure you want to revoke this link?')
                    ) {
                      onSave({
                        ...link,
                        revoked: true,
                      });
                      onClose();
                    } else if (link.revoked) {
                      onSave({
                        ...link,
                        revoked: false,
                      });
                      onClose();
                    }
                  }}
                >
                  {link.revoked ? 'Unrevoke Link' : 'Revoke Link'}
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
