import Fuse from 'fuse.js';
import * as React from 'react';
import 'flatpickr/dist/themes/material_blue.css';
import Flatpickr from 'react-flatpickr';
import DynamicMarkdownRenderer from '../DynamicMarkdownRenderer';
import SEO from '../seo';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ClassLayout from './ClassLayout';
import ClassContext from '../../context/ClassContext';
import ConfirmationModal from './ConfirmModal';
import FirebaseContext from '../../context/FirebaseContext';
import { Problem } from '../../models/problem';
import { format } from './ClassPage';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import ProblemSelect from './ProblemSelect';
import AssignmentProgressView from './LoadableAssignmentProgressView';
import { useDarkMode } from '../../context/DarkModeContext';
export interface ProblemJSON {
  division: string | null;
  moduleId: string | null;
  moduleTitle: string | null;
  source: string | null;
  name: string | null;
  id: string | null;
  difficulty:
    | 'Very Easy'
    | 'Easy'
    | 'Normal'
    | 'Hard'
    | 'Very Hard'
    | 'Insane'
    | null;
  starred: boolean | null;
  tags: string[] | null;
  solID: string | null;
  solQuality: 'bad' | 'ok' | 'good' | null;
}
export class ProblemWithDivisionInfo extends Problem {
  constructor(
    public division: string | null,
    public moduleId: string | null,
    public moduleTitle: string | null,
    public source: string | null,
    public name: string | null,
    public id: string | null,
    public difficulty?:
      | 'Very Easy'
      | 'Easy'
      | 'Normal'
      | 'Hard'
      | 'Very Hard'
      | 'Insane'
      | null,
    public starred?: boolean,
    public tags?: string[],
    public solID?: string,
    public solQuality: 'bad' | 'ok' | 'good' = 'ok'
  ) {
    super(source, name, id, difficulty, starred, tags, solID, solQuality);
  }

  public toJSON(): ProblemJSON {
    return {
      division: this.division || null,
      moduleId: this.moduleId || null,
      moduleTitle: this.moduleTitle || null,
      source: this.source || null,
      name: this.name || null,
      id: this.id || null,
      difficulty: this.difficulty || null,
      starred: this.starred || null,
      tags: this.tags || null,
      solID: this.solID || null,
      solQuality: this.solQuality || null,
    };
  }
}
export default function PostPage(props: {
  path: string;
  type: 'announcement' | 'assignment';
}): ReactElement {
  const { classId, announcementId, assignmentId, type } = props as {
    path: string;
    classId: string;
    announcementId?: string;
    assignmentId?: string;
    type: 'announcement' | 'assignment';
  };
  const id: string = type === 'announcement' ? announcementId : assignmentId;

  const firebase = useContext(FirebaseContext);
  const darkMode = useDarkMode();
  const { loading, error, data, isInstructor, students } = useContext(
    ClassContext
  );
  const [showDiscardModal, setShowDiscardModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const post = data
    ? ((type === 'announcement' ? data.announcements : data.assignments) as {
        id: string;
        [k: string]: any;
      }[]).find(a => a.id === id)
    : null;
  const notFound = !loading && (!data || !post);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [content, setContent] = useState('');

  const problemsList = [];
  const modulesList = [];

  const postProblems = React.useMemo(() => {
    return (
      post?.problems?.map(
        p =>
          new ProblemWithDivisionInfo(
            p.division,
            p.moduleId,
            p.moduleTitle,
            p.source,
            p.name,
            p.id,
            p.difficulty || 'Normal',
            false,
            undefined,
            p.solID,
            p.solQuality
          )
      ) || []
    );
  }, [post?.problems]);
  const [problems, setProblems] = useState<ProblemWithDivisionInfo[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const searchDivisionOptions = [
    { value: '___any', label: 'Any' },
    { value: 'general', label: 'General' },
    { value: 'bronze', label: 'Bronze' },
    { value: 'silver', label: 'Silver' },
    { value: 'gold', label: 'Gold' },
    { value: 'plat', label: 'Platinum' },
    { value: 'adv', label: 'Advanced' },
  ];
  const fuse: Fuse<Record<string, any>> = useMemo(
    () => new Fuse(problemsList, { keys: ['name'] }),
    [problemsList]
  );

  const [searchDivision, setSearchDivision] = useState('___any');
  const searchModuleOptions = React.useMemo(() => {
    if (!searchDivision) return [{ value: '___any', label: 'Any' }];
    return [
      { value: '___any', label: 'Any' },
      ...(modulesList
        .filter(category => category.division === searchDivision)
        .map(m => m.data) || []),
    ];
  }, [searchDivision, problemsList]);
  const [searchModule, setSearchModule] = useState('___any');
  React.useEffect(() => {
    setSearchModule('___any');
  }, [searchDivision]);
  const searchResults = React.useMemo(() => {
    if (!searchQuery && searchDivision === '___any') return [];
    let refinedProblemsList = problemsList;
    if (searchQuery) {
      refinedProblemsList = fuse.search(searchQuery).map(result => result.item);
    }
    if (searchModule !== '___any') {
      refinedProblemsList = refinedProblemsList.filter(
        p => p.moduleId === searchModule
      );
    } else if (searchDivision !== '___any') {
      refinedProblemsList = refinedProblemsList.filter(
        p => p.division === searchDivision
      );
    }
    return (
      refinedProblemsList
        .slice(0, 20)

        .map(
          p =>
            new ProblemWithDivisionInfo(
              p.division,
              p.moduleId,
              p.moduleName,
              p.source,
              p.name,
              p.id,
              p.difficulty,
              false,
              undefined,
              p.solID,
              p.solQuality
            )
        ) || []
    );
  }, [searchModule, searchDivision, problemsList, searchQuery]);
  const hasChanges = React.useMemo(
    () =>
      title !== post?.title ||
      (type === 'assignment' &&
        (dueDate
          ? dueDate.getTime() !== post?.dueDate?.toDate().getTime()
          : !!post?.dueDate)) ||
      problems.length !== postProblems.length ||
      problems.some(
        (el, i) =>
          el?.uniqueID !== postProblems[i]?.uniqueID ||
          el?.difficulty !== postProblems[i]?.difficulty
      ) ||
      content !== post?.content,
    [title, content, dueDate, type, post, problems, postProblems]
  );
  React.useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      e.returnValue = 'You have unsaved changes!';
      return false;
    };
    if (hasChanges && isInstructor && edit) {
      window.addEventListener('beforeunload', handler);
    }
    return () => window.removeEventListener('beforeunload', handler);
  }, [hasChanges, isInstructor, edit]);

  if (loading || notFound || error || (!isInstructor && !post.published)) {
    return (
      <>
        <SEO title={loading ? 'Loading...' : '404 Not Found'} />
        <TopNavigationBar hideClassesPromoBar />

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
              <span>
                This {type === 'announcement' ? 'announcement' : 'assignment'}{' '}
                may have been deleted or removed.
              </span>
            )}
          </p>
        )}
      </>
    );
  }

  return (
    <>
      <SEO title={`${post?.title || ''} | ${data.name || ''}`} />
      <ClassLayout classId={classId}>
        <div className="bg-white dark:bg-dark-surface lg:min-w-0 lg:flex-1">
          <div className="px-8 xl:px-16 pt-4 sm:pt-8 pb-4 xl:pt-10">
            <div>
              <div className={'flex justify-between'}>
                <span className="inline-flex rounded-md shadow-sm">
                  <button
                    onClick={() => navigate(`/class/${classId}`)}
                    disabled={edit && hasChanges}
                    className={
                      'inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm leading-5 font-medium rounded-md text-gray-700 dark:text-gray-300 ' +
                      (edit && hasChanges
                        ? 'bg-gray-300 dark:bg-gray-700'
                        : 'bg-white dark:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 dark:active:text-gray-100 active:bg-gray-50 dark:active:bg-gray-600 transition ease-in-out duration-150')
                    }
                  >
                    {edit && hasChanges
                      ? 'Save or Discard Changes to go Back'
                      : 'Back'}
                  </button>
                </span>
                <div>
                  {isInstructor && !edit && (
                    <>
                      <span className="inline-flex rounded-md shadow-sm">
                        <button
                          type="button"
                          onClick={() => {
                            setEdit(true);
                            setContent(post.content);
                            if (type === 'assignment') {
                              setDueDate(post.dueDate?.toDate());
                              setProblems(postProblems);
                            }
                            setTitle(post.title);
                          }}
                          className={
                            'inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm leading-5 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 dark:active:text-gray-100 active:bg-gray-50 dark:active:bg-gray-600 transition ease-in-out duration-150'
                          }
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
                          {post.published ? 'Unpublish' : 'Publish'}
                        </button>
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            {isInstructor && edit && (
              <div className={'flex justify-between mt-4'}>
                <div>
                  <span className="inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      onClick={() => setShowDeleteModal(true)}
                      disabled={post.published}
                      className={
                        'inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white ' +
                        (post.published
                          ? 'bg-red-300'
                          : 'bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition ease-in-out duration-150')
                      }
                    >
                      {post.published
                        ? 'Unpublish Before Deleting'
                        : `Delete ${
                            type === 'announcement'
                              ? 'Announcement'
                              : 'Assignment'
                          }`}
                    </button>
                  </span>
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
                      className={
                        'inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm leading-5 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 dark:active:text-gray-100 active:bg-gray-50 dark:active:bg-gray-600 transition ease-in-out duration-150'
                      }
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
                          .collection('classes')
                          .doc(classId);
                        firebase
                          .firestore()
                          .runTransaction(function (transaction) {
                            // This code may get re-run multiple times if there are conflicts.
                            return transaction.get(ref).then(function (doc) {
                              if (!doc.exists) {
                                throw 'Document does not exist!';
                              }
                              const key =
                                type === 'announcement'
                                  ? 'announcements'
                                  : 'assignments';
                              const postIndex = doc
                                .data()
                                [key].findIndex(a => a.id === id);
                              if (postIndex === -1) return;
                              let newData = doc.data()[key];
                              newData[postIndex].title =
                                title ||
                                `Untitled ${
                                  type === 'announcement'
                                    ? 'Announcement'
                                    : 'Assignment'
                                }`;
                              if (type === 'assignment') {
                                newData[postIndex].dueDate = dueDate
                                  ? firebase.firestore.Timestamp.fromDate(
                                      dueDate
                                    )
                                  : null;
                                newData[postIndex].problems = problems.map(p =>
                                  p.toJSON()
                                );
                              }
                              newData[postIndex].content = content || '';
                              transaction.update(ref, {
                                [key]: newData,
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
                      {saving
                        ? 'Saving...'
                        : hasChanges
                        ? 'Save'
                        : 'Nothing to Save'}
                    </button>
                  </span>
                </div>
              </div>
            )}
            <div className="mt-4">
              {edit ? (
                <input
                  type="text"
                  placeholder={'Enter a title...'}
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="dark:bg-gray-200 dark:text-gray-800 text-2xl leading-9 font-bold flex-1 form-input block w-full min-w-0 rounded-md transition sm:text-sm sm:leading-5"
                />
              ) : (
                <h1 className="text-2xl leading-9 font-bold">{post.title}</h1>
              )}
            </div>
            {type === 'assignment' && (
              <div className="mt-2">
                {edit ? (
                  <Flatpickr
                    placeholder={'Choose a due date (optional)'}
                    options={{
                      dateFormat: '\\D\\u\\e l, F J, Y, h:i K',
                      enableTime: true,
                    }}
                    value={dueDate}
                    onChange={date => setDueDate(date[0])}
                    className="dark:bg-gray-200 dark:text-gray-800 flex-1 form-input block w-full min-w-0 rounded-md transition sm:text-sm sm:leading-5"
                  />
                ) : (
                  <h1 className="text-md text-gray-800 dark:text-gray-200 leading-7 tracking-tight">
                    {post?.dueDate
                      ? `Due ${format(post?.dueDate)}`
                      : 'No Due Date'}
                  </h1>
                )}
              </div>
            )}
            {edit ? (
              <div
                className={
                  'mt-4 ' + (darkMode ? 'dark-mde-container' : 'mde-container')
                }
              >
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
                <DynamicMarkdownRenderer markdown={post.content} debounce={0} />
              </div>
            )}
            {type === 'assignment' && (
              <ProblemSelect
                edit={edit}
                problems={problems}
                setProblems={setProblems}
                searchDivision={searchDivision}
                searchDivisionOptions={searchDivisionOptions}
                setSearchDivision={setSearchDivision}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                searchModule={searchModule}
                searchModuleOptions={searchModuleOptions}
                setSearchModule={setSearchModule}
                postProblems={postProblems}
                searchResults={searchResults}
              />
            )}
            {type === 'assignment' &&
              isInstructor &&
              postProblems.length > 0 && (
                <AssignmentProgressView
                  problems={postProblems}
                  title={'Student Progress'}
                  students={students}
                  instructors={data.instructors}
                />
              )}
          </div>
        </div>

        <ConfirmationModal
          show={showPublishModal}
          setShow={setShowPublishModal}
          title={`${post.published ? 'Unpublish' : 'Publish'} ${
            type === 'announcement' ? 'Announcement' : 'Assignment'
          }?`}
          confirmButtonText={`${post.published ? 'Unpublish' : 'Publish'}${
            publishing ? 'ing' : ''
          } ${type === 'announcement' ? 'Announcement' : 'Assignment'}`}
          disabled={publishing}
          onConfirm={() => {
            setPublishing(true);
            const ref = firebase.firestore().collection('classes').doc(classId);
            firebase
              .firestore()
              .runTransaction(function (transaction) {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(ref).then(function (doc) {
                  if (!doc.exists) {
                    throw 'Document does not exist!';
                  }

                  const key =
                    type === 'announcement' ? 'announcements' : 'assignments';
                  const postIndex = doc.data()[key].findIndex(a => a.id === id);
                  if (postIndex === -1) return;
                  let newData = doc.data()[key];
                  newData[postIndex].published = !post.published;
                  if (!post.published) {
                    newData[
                      postIndex
                    ].date = firebase.firestore.Timestamp.fromDate(new Date());
                  }
                  transaction.update(ref, { [key]: newData });
                });
              })
              .then(() => {
                setShowPublishModal(false);
                setPublishing(false);
              });
          }}
        >
          {post.published
            ? `Students will no longer be able to view this ${
                type === 'announcement' ? 'announcement' : 'assignment'
              }. The ${
                type === 'announcement' ? 'announcement' : 'assignment'
              } will be reverted to a draft that you can republish later.`
            : `This will allow all students to view this ${
                type === 'announcement' ? 'announcement' : 'assignment'
              }.`}
          {type === 'assignment' && post.published
            ? " User progress on assigned problems won't be deleted."
            : ''}
        </ConfirmationModal>
        <ConfirmationModal
          show={showDeleteModal}
          setShow={setShowDeleteModal}
          title={`Delete ${
            type === 'announcement' ? 'Announcement' : 'Assignment'
          }?`}
          confirmButtonText={
            deleting
              ? `Deleting ${
                  type === 'announcement' ? 'Announcement' : 'Assignment'
                }...`
              : `Delete ${
                  type === 'announcement' ? 'Announcement' : 'Assignment'
                }`
          }
          disabled={deleting}
          onConfirm={() => {
            setDeleting(true);
            const ref = firebase.firestore().collection('classes').doc(classId);
            firebase
              .firestore()
              .runTransaction(function (transaction) {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(ref).then(function (doc) {
                  if (!doc.exists) {
                    throw 'Document does not exist!';
                  }

                  const key =
                    type === 'announcement' ? 'announcements' : 'assignments';
                  const postIndex = doc.data()[key].findIndex(a => a.id === id);
                  if (postIndex === -1) return;
                  let newData = doc.data()[key];
                  newData[postIndex] = null;
                  newData = newData.filter(a => !!a);
                  transaction.update(ref, { [key]: newData });
                });
              })
              .then(() => {
                return navigate(`/class/${classId}`);
              });
          }}
        >
          {post.published && (
            <b>Are you sure you don't want to unpublish instead?</b>
          )}
          This will permanently delete all the contents of this{' '}
          {type === 'announcement' ? 'announcement' : 'assignment'}
          forever.
          {type === 'assignment'
            ? " User progress on assigned problems won't be deleted."
            : ''}
          <br />
          This action cannot be undone.
        </ConfirmationModal>
        <ConfirmationModal
          show={showDiscardModal}
          setShow={setShowDiscardModal}
          title={`Discard Changes?`}
          confirmButtonText={`Discard Changes`}
          onConfirm={() => {
            setContent(post.content);
            setDueDate(post.dueDate);
            setProblems(postProblems);
            setTitle(post.title);
            setShowDiscardModal(false);
          }}
        >
          This will revert the title and content of your{' '}
          {type === 'announcement' ? 'announcement' : 'assignment'} to its last
          saved value.
        </ConfirmationModal>
      </ClassLayout>
    </>
  );
}
