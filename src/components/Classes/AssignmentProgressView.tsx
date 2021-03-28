import * as React from 'react';
import ReactDataGrid from 'react-data-grid';
import {
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import '../../styles/assignment-progress-view.css';
import FirebaseContext from '../../context/FirebaseContext';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useDarkMode } from '../../context/DarkModeContext';

export default function AssignmentProgressView({
  problems,
  students,
  instructors,
  title,
}) {
  const firebase = useContext(FirebaseContext);
  const darkMode = useDarkMode();
  const fullScreenHandlers = useFullScreenHandle();
  const [studentNameInfo, setStudentNameInfo] = useState([]);
  const [showStudentEmails, setShowStudentEmails] = useState(false);
  const rows = useMemo(
    () =>
      students
        .map(student => {
          const progressMap = {
            Solved: '✓',
            Reviewing: '✓',
            Solving: 'IP',
            Skipped: '-',
            Ignored: '--',
          };
          const studentData = studentNameInfo.find(s => s.uid === student.id);
          const data: Record<string, any> = {
            name:
              (studentData?.name || 'Loading...') +
              (instructors?.includes(student.id) ? ' (Instructor)' : ''),
            email: studentData?.email,
          };
          const nonAbbreviatedProgress = {};
          const progress = student.data.userProgressOnProblems;
          for (const key in progress) {
            if (
              progress.hasOwnProperty(key) &&
              problems.find(p => p.url === key)
            ) {
              data[problems.find(p => p.url === key).id] =
                progressMap[progress[key]] || '';
              nonAbbreviatedProgress[problems.find(p => p.url === key).id] =
                progress[key];
            }
          }

          data.row = [
            data.name,
            data.email,
            ...problems.map(
              p => nonAbbreviatedProgress[p.id] || 'Not Attempted'
            ),
          ];
          return data;
        })
        .sort((a, b) => a.name.localeCompare(b.name)),
    [problems, studentNameInfo]
  );

  useEffect(() => {
    if (!firebase || students.length === 0) {
      return;
    }

    const getUsers = firebase.functions().httpsCallable('getUsers');

    getUsers({
      users: students.map(student => ({
        uid: student.id,
      })),
    }).then(d => {
      if (d?.data?.users?.length > 0) {
        setStudentNameInfo(
          d.data.users.map(student => ({
            uid: student.uid,
            email: student.email,
            name: student.displayName,
          }))
        );
      } else {
        alert(
          'There was an error updating the student names. Please try again later.'
        );
      }
    });
  }, [students, firebase]);
  return (
    <div className={'my-6'}>
      <h3 className={'text-xl leading-9 font-bold'}>{title}</h3>
      <p className={'my-2'}>
        <b>✓</b> Solved | <b>IP</b> In Progress | <b>-</b> Skipped | <b>--</b>{' '}
        Ignored |{' '}
        <b>
          <i>Blank</i>
        </b>{' '}
        Not Attempted
      </p>
      <div className={'my-2'}>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="add-instructor-also-make-admin"
              checked={showStudentEmails}
              onChange={e => setShowStudentEmails(e.target.checked)}
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition"
            />
          </div>
          <div className="ml-3 text-sm leading-5">
            <label
              htmlFor="add-instructor-also-make-admin"
              className="font-medium text-gray-700 dark:text-gray-300"
            >
              Also Show Emails
            </label>
          </div>
        </div>
      </div>
      <FullScreen handle={fullScreenHandlers}>
        <div
          className={
            'assignment-progress-grid ' +
            (darkMode
              ? 'assignment-progress-dark'
              : 'assignment-progress-light') +
            ' ' +
            (fullScreenHandlers.active ? 'assignment-progress-fullscreen' : '')
          }
        >
          <ReactDataGrid
            minHeight={
              fullScreenHandlers.active
                ? // vh
                  Math.max(
                    document.documentElement.clientHeight || 0,
                    window.innerHeight || 0
                  ) - 35
                : 350
            }
            columns={[
              { key: 'name', name: 'Name', frozen: true, width: 220 },
              ...(showStudentEmails
                ? [{ key: 'email', name: 'Email', width: 200 }]
                : []),
              ...problems.map(p => ({
                key: p.id,
                name: p.name,
                width: Math.max(p.name.length * 10 + 5, 100),
              })),
            ]}
            rowGetter={i => rows[i]}
            rowsCount={rows.length}
          />
        </div>
      </FullScreen>
      <p className="my-2">
        <button
          className={
            'text-blue-700 hover:underline active:text-blue-900 active:outline-none'
          }
          onClick={fullScreenHandlers.enter}
        >
          Fullscreen
        </button>{' '}
        |{' '}
        <a
          href={
            'data:application/octet-stream,' +
            encodeURIComponent(
              [
                ['Name', 'Email', ...problems.map(p => p.name)],
                ...rows.map(r => r.row),
              ]
                .map(a =>
                  a
                    .map(el => el || '')
                    .map(el => el.replace(/"/g, '""'))
                    .map(el => (el.indexOf(',') > -1 ? '"' + el + '"' : el))
                    .join(',')
                )
                .join('\n')
            )
          }
          download={'assignment-export.csv'}
          className={'text-blue-700 hover:underline active:text-blue-900'}
        >
          Export as CSV
        </a>
      </p>
    </div>
  );
}
