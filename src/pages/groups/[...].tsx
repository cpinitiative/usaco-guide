// import * as React from 'react';

// export default function Placeholder() {
//   return (
//     <div data-testid="build-placeholder">
//       This placeholder greatly speeds up build times. Uncomment this code and
//       comment out everything below it. Make sure to undo before pushing.
//     </div>
//   );
// }

import { RouteComponentProps, Router } from '@reach/router';
import { Link } from 'gatsby';
import React, { ReactElement, useEffect } from 'react';
import EditGroupPage from '../../components/Groups/EditGroupPage/EditGroupPage';
import EditPostPage from '../../components/Groups/EditPostPage/EditPostPage';
import EditProblemPage from '../../components/Groups/EditProblemPage/EditProblemPage';
import GroupLeaderboardPage from '../../components/Groups/GroupLeaderboardPage/GroupLeaderboardPage';
import GroupPage from '../../components/Groups/GroupPage/GroupPage';
import GroupSelectPage from '../../components/Groups/GroupSelectPage/GroupSelectPage';
import JoinGroupPage from '../../components/Groups/JoinGroupPage';
import JoinLinksPage from '../../components/Groups/JoinLinksPage/JoinLinksPage';
import MembersPage from '../../components/Groups/MembersPage/MembersPage';
import PostLeaderboardPage from '../../components/Groups/PostLeaderboardPage/PostLeaderboardPage';
import PostPage from '../../components/Groups/PostPage/PostPage';
import ProblemPage from '../../components/Groups/ProblemPage/ProblemPage';
import { ProblemSubmissionPopupProvider } from '../../components/Groups/ProblemSubmissionPopup';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import TopNavigationBar from '../../components/TopNavigationBar/TopNavigationBar';
import { SignInContext } from '../../context/SignInContext';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import {
  ActiveGroupProvider,
  useActiveGroup,
} from '../../hooks/groups/useActiveGroup';
import {
  ActivePostProblemsProvider,
  useActivePostProblems,
} from '../../hooks/groups/useActivePostProblems';
import NotFoundPage from '../404';

interface GroupPageWrapperProps extends RouteComponentProps {
  children: React.ReactNode;
  groupId?: string;
}
interface PostPageWrapperProps extends GroupPageWrapperProps {
  postId?: string;
}
const GroupPageWrapper = (props: GroupPageWrapperProps): ReactElement => {
  /* keeps track of current group id and error handling pages
   if that group cannot be accessed for whatever reason*/

  const { activeGroupId, setActiveGroupId, isLoading, groupData } =
    useActiveGroup();
  const { firebaseUser, isLoaded: isUserLoaded } =
    React.useContext(UserDataContext);
  const { signIn } = React.useContext(SignInContext);
  useEffect(() => {
    setActiveGroupId(props.groupId);
    //remove groupId on exit
    return () => setActiveGroupId(undefined);
  }, []);

  if (isUserLoaded && !firebaseUser?.uid) {
    return (
      <Layout>
        <TopNavigationBar />
        <main className="text-center py-10">
          <p className="font-medium text-2xl">
            You need to sign in to access groups.{' '}
            <button
              onClick={signIn}
              className="focus:outline-none underline text-blue-600 dark:text-blue-300"
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
        <main className="text-center py-10">
          <p className="font-medium text-2xl">Loading...</p>
        </main>
      </Layout>
    );
  }
  if (!groupData) {
    return (
      <Layout>
        <TopNavigationBar />
        <SEO title="Group Not Found" />
        <main className="text-center py-10">
          <p className="font-medium text-2xl">
            Group not found.{' '}
            <Link
              to="/groups"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Return Home.
            </Link>
          </p>
        </main>
      </Layout>
    );
  }

  return <>{props.children}</>;
};

const Route = ({
  component: Component,
  ...rest
}: { component: React.FC<RouteComponentProps> } & RouteComponentProps) => (
  <Component {...rest} />
);

const PostPageWrapper = (props: PostPageWrapperProps): ReactElement => {
  const { setActivePostId } = useActivePostProblems();
  React.useEffect(() => {
    setActivePostId(props.postId);
    //remove postId on exit
    return () => setActivePostId(undefined);
  }, []);

  return <>{props.children}</>;
};
/*
To use URL Params in any of the components passed into Route, simply set
RouteComponentProps<{
  randomIdHere: string;
}
as the function component's prop type


See PostPage.tsx as an example
*/
export default function GroupsRouter(): JSX.Element {
  return (
    <ActiveGroupProvider>
      <ActivePostProblemsProvider>
        <ProblemSubmissionPopupProvider>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore there's some dumb "Type {} is not assignable to type ReactNode" bug here... */}
          <Router basepath="/groups">
            <Route component={GroupSelectPage} path="/" />
            <Route component={JoinGroupPage} path="/join" />

            <GroupPageWrapper path="/:groupId">
              <Route component={GroupPage} path="/" />
              <Route component={MembersPage} path="members" />
              <Route component={GroupLeaderboardPage} path="leaderboard" />
              <Route component={JoinLinksPage} path="join-links" />
              <Route component={EditGroupPage} path="edit" />
              <PostPageWrapper path="post/:postId">
                <Route component={PostPage} path="/" />
                <Route component={PostLeaderboardPage} path="leaderboard" />
                <Route component={EditPostPage} path="edit" />
                <Route component={ProblemPage} path="problems/:problemId" />
                <Route
                  component={EditProblemPage}
                  path="problems/:problemId/edit"
                />
              </PostPageWrapper>
            </GroupPageWrapper>

            <Route component={NotFoundPage} default />
          </Router>
        </ProblemSubmissionPopupProvider>
      </ActivePostProblemsProvider>
    </ActiveGroupProvider>
  );
}
