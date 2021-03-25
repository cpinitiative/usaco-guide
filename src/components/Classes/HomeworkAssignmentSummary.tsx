import { Link } from 'gatsby';
import { ProblemWithDivisionInfo } from './PostPage';
import * as React from 'react';
import { format } from './ClassPage';
import { useMemo } from 'react';

export default function HomeworkAssignmentSummary({
  assignment,
  classId,
  isInstructor,
  studentsNotInstructors,
  userProgressOnProblems,
}) {
  const completionText = useMemo(() => {
    return isInstructor
      ? `${Math.round(
          (assignment.problems.reduce((counter, problem) => {
            const {
              division,
              moduleId,
              moduleTitle,
              source,
              name,
              id,
              difficulty,
              starred,
              tags,
              solID,
              solQuality,
            } = problem;
            const problemClass = new ProblemWithDivisionInfo(
              division,
              moduleId,
              moduleTitle,
              source,
              name,
              id,
              difficulty,
              starred,
              tags,
              solID,
              solQuality
            );
            return (
              counter +
              studentsNotInstructors.filter(
                student =>
                  student.data.userProgressOnProblems &&
                  student.data.userProgressOnProblems[problemClass.url] ===
                    'Solved'
              ).length
            );
          }, 0) /
            (assignment.problems.length * studentsNotInstructors.length)) *
            100
        )}% Completed by Students (${
          studentsNotInstructors.filter(student =>
            assignment.problems.every(problem => {
              const {
                division,
                moduleId,
                moduleTitle,
                source,
                name,
                id,
                difficulty,
                starred,
                tags,
                solID,
                solQuality,
              } = problem;
              const problemClass = new ProblemWithDivisionInfo(
                division,
                moduleId,
                moduleTitle,
                source,
                name,
                id,
                difficulty,
                starred,
                tags,
                solID,
                solQuality
              );
              return (
                student.data.userProgressOnProblems &&
                student.data.userProgressOnProblems[problemClass.url] ===
                  'Solved'
              );
            })
          ).length
        }/${studentsNotInstructors.length} Student${
          studentsNotInstructors.length !== 1 ? 's' : ''
        } Fully Completed)`
      : `${assignment.problems.reduce((counter, problem) => {
          const {
            division,
            moduleId,
            moduleTitle,
            source,
            name,
            id,
            difficulty,
            starred,
            tags,
            solID,
            solQuality,
          } = problem;
          const problemClass = new ProblemWithDivisionInfo(
            division,
            moduleId,
            moduleTitle,
            source,
            name,
            id,
            difficulty,
            starred,
            tags,
            solID,
            solQuality
          );
          return (
            counter +
            (userProgressOnProblems[problemClass.url] === 'Solved' ? 1 : 0)
          );
        }, 0)} / ${assignment.problems.length} Problems Complete`;
  }, [
    assignment,
    isInstructor,
    userProgressOnProblems,
    classId,
    studentsNotInstructors,
  ]);
  return (
    <li key={assignment.id} className="py-4 group">
      <Link
        to={`/class/${classId}/assignments/${assignment.id}`}
        className={'cursor-pointer'}
      >
        <div className="flex space-x-3">
          <div className="flex-1 space-y-1">
            <div className="">
              <h3 className="text-sm font-medium leading-5 group-hover:text-gray-700 dark:group-hover:text-gray-400">
                {assignment.title}
                {!assignment.published && (
                  <span className={'text-red-600'}> (Draft)</span>
                )}
              </h3>
            </div>
            <p className="text-sm leading-5 text-gray-500 group-hover:text-gray-400 dark:group-hover:text-gray-600">
              {assignment?.dueDate
                ? `Due ${format(assignment?.dueDate)}`
                : 'No Due Date'}
            </p>

            {
              <p className="text-sm leading-5 text-gray-500">
                {assignment.problems.length > 0
                  ? completionText
                  : 'No Attached Problems'}
              </p>
            }
          </div>
        </div>
      </Link>
    </li>
  );
}
