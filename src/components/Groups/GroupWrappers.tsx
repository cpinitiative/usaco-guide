import { RouteComponentProps } from '@reach/router';
import Link from 'next/link';
import { ReactElement, useEffect } from 'react';
import { useSignIn } from '../../context/SignInContext';
import {
  useFirebaseUser,
  useIsUserDataLoaded,
} from '../../context/UserDataContext/UserDataContext';
import {
  ActiveGroupProvider,
  useActiveGroup,
} from '../../hooks/groups/useActiveGroup';
import {
  ActivePostProblemsProvider,
  useActivePostProblems,
} from '../../hooks/groups/useActivePostProblems';
import Layout from '../layout';
import SEO from '../seo';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import { ProblemSubmissionPopupProvider } from './ProblemSubmissionPopup';

interface GroupPageWrapperProps extends RouteComponentProps {
  children?: React.ReactNode;
  groupId: string;
}

export function GroupPageWrapper(props: GroupPageWrapperProps): ReactElement {
  /* keeps track of current group id and error handling pages
     if that group cannot be accessed for whatever reason*/

  const { activeGroupId, setActiveGroupId, isLoading, groupData } =
    useActiveGroup();
  const firebaseUser = useFirebaseUser();
  const isUserLoaded = useIsUserDataLoaded();
  const { signIn } = useSignIn();
  useEffect(() => {
    setActiveGroupId(props.groupId);
    //remove groupId on exit
    return () => setActiveGroupId(undefined);
  }, [props.groupId]);

  if (isUserLoaded && !firebaseUser?.uid) {
    return (
      <Layout>
        <TopNavigationBar />
        <main className="py-10 text-center">
          <p className="text-2xl font-medium">
            You need to sign in to access groups.{' '}
            <button
              onClick={signIn}
              className="text-blue-600 underline focus:outline-hidden dark:text-blue-300"
            >
              Sign in now
            </button>
          </p>
        </main>
      </Layout>
    );
  }
  if (
    isLoading ||
    activeGroupId !== props.groupId ||
    (groupData && groupData.id !== props.groupId)
  ) {
    return (
      <Layout>
        <TopNavigationBar />
        <SEO title="Loading..." />
        <main className="py-10 text-center">
          <p className="text-2xl font-medium">Loading...</p>
        </main>
      </Layout>
    );
  }
  if (!groupData) {
    return (
      <Layout>
        <TopNavigationBar />
        <SEO title="Group Not Found" />
        <main className="py-10 text-center">
          <p className="text-2xl font-medium">
            Group not found.{' '}
            <Link
              href="/groups"
              className="text-blue-600 underline dark:text-blue-400"
            >
              Return Home.
            </Link>
          </p>
        </main>
      </Layout>
    );
  }

  return <>{props.children}</>;
}

interface PostPageWrapperProps {
  postId?: string;
  children?: React.ReactNode;
}
export const PostPageWrapper = (props: PostPageWrapperProps): ReactElement => {
  const { setActivePostId } = useActivePostProblems();
  useEffect(() => {
    setActivePostId(props.postId);
    //remove postId on exit
    return () => setActivePostId(undefined);
  }, []);

  return <>{props.children}</>;
};

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <ActiveGroupProvider>
      <ActivePostProblemsProvider>
        <ProblemSubmissionPopupProvider>
          {children}
        </ProblemSubmissionPopupProvider>
      </ActivePostProblemsProvider>
    </ActiveGroupProvider>
  );
}
