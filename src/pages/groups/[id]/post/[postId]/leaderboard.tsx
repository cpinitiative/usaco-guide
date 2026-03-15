import { useRouter } from 'next/router';
import Wrapper, {
  GroupPageWrapper,
  PostPageWrapper,
} from '../../../../../components/Groups/GroupWrappers';
import PostLeaderboardPage from '../../../../../components/Groups/PostLeaderboardPage/PostLeaderboardPage';

const Index = () => {
  const router = useRouter();
  const { id, postId } = router.query;
  return (
    <Wrapper>
      <GroupPageWrapper groupId={id as string}>
        <PostPageWrapper postId={postId as string}>
          <PostLeaderboardPage
            groupId={id as string}
            postId={postId as string}
          />
        </PostPageWrapper>
      </GroupPageWrapper>
    </Wrapper>
  );
};

export default Index;
