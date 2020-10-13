import * as React from 'react';
import Markdown from 'react-markdown';
import CodeBlock from '../markdown/CodeBlock/CodeBlock';
import ReactDOMServer from 'react-dom/server';

import DynamicMarkdownRenderer from '../DynamicMarkdownRenderer';
import SEO from '../seo';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import { Link, navigate } from 'gatsby';
import * as Icons from 'heroicons-react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { ReactElement, useContext, useEffect, useRef, useState } from 'react';
import ClassLayout from './ClassLayout';
import ClassContext from '../../context/ClassContext';
import ConfirmationModal from './ConfirmModal';
import FirebaseContext from '../../context/FirebaseContext';
export default function AnnouncementPage(props: {
  path: string;
}): ReactElement {
  const { classId, announcementId } = props as {
    path: string;
    classId: string;
    announcementId: string;
  };
  const firebase = useContext(FirebaseContext);
  const { loading, error, data, isInstructor } = useContext(ClassContext);
  const [showDiscardModal, setShowDiscardModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const announcement = data
    ? data.announcements.find(a => a.id === announcementId)
    : null;
  const notFound = !loading && (!data || !announcement);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const hasChanges =
    title !== announcement?.title || content !== announcement?.content;

  if (
    loading ||
    notFound ||
    error ||
    (!isInstructor && !announcement.published)
  ) {
    return (
      <>
        <SEO title="404 Not Found" />
        <TopNavigationBar />

        <h1 className="text-center mt-16 text-4xl sm:text-5xl font-black">
          {loading
            ? 'Loading...'
            : error
            ? 'An Error Occurred'
            : '404 Not Found'}
        </h1>
        {!loading && (
          <p className="text-center mt-4">
            {error ? (
              `${error.message} (If this was unexpected, please let us know via the contact us link in the top navbar).`
            ) : (
              <span>This announcement may have been deleted or removed.</span>
            )}
          </p>
        )}
      </>
    );
  }
  return (
    <>
      <SEO title="Class" />
      <ClassLayout classId={classId}>
        <div className="bg-white lg:min-w-0 lg:flex-1">
          <div className="px-8 xl:px-16 pt-4 sm:pt-8 pb-4 xl:pt-10">
            <div>
              <div className={'flex justify-between'}>
                <span className="inline-flex rounded-md shadow-sm">
                  <Link
                    to={`/class/${classId}`}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                  >
                    Back
                  </Link>
                </span>
                <div>
                  {isInstructor && !edit && (
                    <>
                      <span className="inline-flex rounded-md shadow-sm">
                        <button
                          type="button"
                          onClick={() => {
                            setEdit(true);
                            setContent(announcement.content);
                            setTitle(announcement.title);
                          }}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                        >
                          Edit
                        </button>
                      </span>
                      <span className="ml-3 inline-flex rounded-md shadow-sm">
                        <button
                          type="button"
                          onClick={() => setShowPublishModal(true)}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                        >
                          {announcement.published ? 'Unpublish' : 'Publish'}
                        </button>
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            {isInstructor && edit && (
              <div className={'flex justify-between'}>
                <div>
                  {!announcement.published && (
                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        type="button"
                        onClick={() => setShowDeleteModal(true)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition ease-in-out duration-150"
                      >
                        Delete Announcement
                      </button>
                    </span>
                  )}
                </div>
                <div>
                  <span className="inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      onClick={() => {
                        if (hasChanges) {
                          setShowDiscardModal(true);
                        } else {
                          setEdit(false);
                        }
                      }}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                    >
                      {hasChanges ? 'Discard Changes' : 'Stop Editing'}
                    </button>
                  </span>
                  <span className="ml-3 inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      disabled={!hasChanges}
                      onClick={() => {
                        setSaving(true);
                        const ref = firebase
                          .firestore()
                          .collection('classes-beta')
                          .doc(classId);
                        firebase
                          .firestore()
                          .runTransaction(function (transaction) {
                            // This code may get re-run multiple times if there are conflicts.
                            return transaction.get(ref).then(function (doc) {
                              if (!doc.exists) {
                                throw 'Document does not exist!';
                              }

                              const announcementIndex = doc
                                .data()
                                .announcements.findIndex(
                                  a => a.id === announcementId
                                );
                              if (announcementIndex === -1) return;
                              let newAnnouncements = doc.data().announcements;
                              newAnnouncements[announcementIndex].title =
                                title || 'Untitled Announcement';
                              newAnnouncements[announcementIndex].content =
                                content || '';
                              transaction.update(ref, {
                                announcements: newAnnouncements,
                              });
                            });
                          })
                          .then(() => {
                            setEdit(false);
                            setSaving(false);
                          });
                      }}
                      className={
                        'inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white ' +
                        (!hasChanges || saving
                          ? 'bg-indigo-300'
                          : 'bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150')
                      }
                    >
                      {saving ? 'Saving...' : 'Save'}
                    </button>
                  </span>
                </div>
              </div>
            )}
            <div className="mt-4">
              {edit ? (
                <input
                  placeholder={'Enter a title...'}
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="text-2xl leading-9 font-bold flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              ) : (
                <h1 className="text-2xl leading-9 font-bold">
                  {announcement.title}
                </h1>
              )}
            </div>

            {edit ? (
              <div className="mt-4">
                <SimpleMDE
                  onChange={e => setContent(e)}
                  value={content}
                  options={{
                    toolbar: [
                      'bold',
                      'italic',
                      'strikethrough',
                      '|',
                      'heading-1',
                      'heading-2',
                      'heading-3',
                      '|',
                      'link',
                      'image',
                      '|',
                      'quote',
                      {
                        name: 'custom',
                        action: function customFunction(editor) {
                          editor.codemirror.replaceSelection('```java\n\n```');
                        },
                        className: 'fa fa-code',
                        title: 'Custom Button',
                      },
                      '|',
                      'ordered-list',
                      'unordered-list',
                      'table',
                    ],
                    shortcuts: {
                      toggleSideBySide: null,
                      toggleFullScreen: null,
                    },
                  }}
                />
              </div>
            ) : (
              <div className="markdown mt-4">
                <DynamicMarkdownRenderer markdown={announcement.content} />
              </div>
            )}
          </div>
        </div>
        <ConfirmationModal
          show={showPublishModal}
          setShow={setShowPublishModal}
          title={`${
            announcement.published ? 'Unpublish' : 'Publish'
          } Announcement?`}
          confirmButtonText={`${
            announcement.published ? 'Unpublish' : 'Publish'
          }${publishing ? 'ing' : ''} Announcement`}
          disabled={publishing}
          onConfirm={() => {
            setPublishing(true);
            const ref = firebase
              .firestore()
              .collection('classes-beta')
              .doc(classId);
            firebase
              .firestore()
              .runTransaction(function (transaction) {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(ref).then(function (doc) {
                  if (!doc.exists) {
                    throw 'Document does not exist!';
                  }

                  const announcementIndex = doc
                    .data()
                    .announcements.findIndex(a => a.id === announcementId);
                  if (announcementIndex === -1) return;
                  let newAnnouncements = doc.data().announcements;
                  newAnnouncements[
                    announcementIndex
                  ].published = !announcement.published;
                  if (!announcement.published) {
                    newAnnouncements[
                      announcementIndex
                    ].date = firebase.firestore.Timestamp.fromDate(new Date());
                  }
                  transaction.update(ref, { announcements: newAnnouncements });
                });
              })
              .then(() => {
                setShowPublishModal(false);
                setPublishing(false);
              });
          }}
        >
          {announcement.published
            ? 'Students will no longer be able to view this announcement. The announcement will be reverted to a draft that you can republish later.'
            : 'This will allow all students to view this announcement.'}
        </ConfirmationModal>
        <ConfirmationModal
          show={showDeleteModal}
          setShow={setShowDeleteModal}
          title={`Delete Announcement?`}
          confirmButtonText={
            deleting ? 'Deleting Announcement...' : 'Delete Announcement'
          }
          disabled={deleting}
          onConfirm={() => {
            setDeleting(true);
            const ref = firebase
              .firestore()
              .collection('classes-beta')
              .doc(classId);
            firebase
              .firestore()
              .runTransaction(function (transaction) {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(ref).then(function (doc) {
                  if (!doc.exists) {
                    throw 'Document does not exist!';
                  }

                  const announcementIndex = doc
                    .data()
                    .announcements.findIndex(a => a.id === announcementId);
                  if (announcementIndex === -1) return;
                  let newAnnouncements = doc.data().announcements;
                  newAnnouncements[announcementIndex] = null;
                  newAnnouncements = newAnnouncements.filter(a => !!a);
                  transaction.update(ref, { announcements: newAnnouncements });
                });
              })
              .then(() => {
                return navigate(`/class/${classId}`);
              });
          }}
        >
          {announcement.published && (
            <b>Are you sure you don't want to unpublish instead?</b>
          )}
          This will permanently delete all the contents of this announcement
          forever.
          <br />
          This action cannot be undone.
        </ConfirmationModal>
        <ConfirmationModal
          show={showDiscardModal}
          setShow={setShowDiscardModal}
          title={`Discard Changes?`}
          confirmButtonText={`Discard Changes`}
          onConfirm={() => {
            setContent(announcement.content);
            setTitle(announcement.title);
            setShowDiscardModal(false);
          }}
        >
          This will revert the title and content of your announcement to its
          last saved value.
        </ConfirmationModal>
      </ClassLayout>
    </>
  );
}
