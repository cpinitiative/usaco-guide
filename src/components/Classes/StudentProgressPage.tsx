import * as React from 'react';
import 'flatpickr/dist/themes/material_blue.css';
import Flatpickr from 'react-flatpickr';
import DynamicMarkdownRenderer from '../DynamicMarkdownRenderer';
import SEO from '../seo';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { ReactElement, useContext, useEffect, useRef, useState } from 'react';
import ClassLayout from './ClassLayout';
import ClassContext from '../../context/ClassContext';
import ConfirmationModal from './ConfirmModal';
import FirebaseContext from '../../context/FirebaseContext';
import { Problem } from '../../models/problem';
import { format } from './ClassPage';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import ProblemSelect from './ProblemSelect';
import AssignmentProgressView from './LoadableAssignmentProgressView';
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
    public division: string,
    public moduleId: string,
    public moduleTitle: string,
    public source: string,
    public name: string,
    public id: string,
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
export default function PostPage({
  classId,
}: {
  path: string;
  classId: string;
}): ReactElement {
  const firebase = useContext(FirebaseContext);
  const { loading, error, data, isInstructor, students } = useContext(
    ClassContext
  );

  const problems = React.useMemo(() => {
    return (
      data?.assignments
        ?.flatMap(a => a.problems)
        .map(
          p =>
            new ProblemWithDivisionInfo(
              p.division,
              p.moduleId,
              p.moduleTitle,
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
  }, [data]);
  console.log('PP', data?.assignments, problems);
  if (loading || !data || error || !isInstructor) {
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
              <span>Page Not Found</span>
            )}
          </p>
        )}
      </>
    );
  }

  return (
    <>
      <SEO title={`Student Homework Progress | ${data.name || ''}`} />
      <ClassLayout classId={classId}>
        <div className="bg-white dark:bg-dark-surface lg:min-w-0 lg:flex-1">
          <div className="px-8 xl:px-16 pt-4 sm:pt-8 pb-4 xl:pt-10">
            <h1 className="text-2xl leading-9 font-bold">
              Student Homework Progress
            </h1>
            {problems.length > 0 && (
              <AssignmentProgressView
                title={''}
                problems={problems}
                students={students}
                instructors={data.instructors}
              />
            )}
          </div>
        </div>
      </ClassLayout>
    </>
  );
}
