import { useRouter } from 'next/router';
import EditProblemPage from '../../../../../../../components/Groups/EditProblemPage/EditProblemPage';
import Wrapper, {
  GroupPageWrapper,
  PostPageWrapper,
} from '../../../../../../../components/Groups/GroupWrappers';

const Index = () => {
  const router = useRouter();
  const { id, postId, problemId } = router.query;
  return (
    <Wrapper>
      <GroupPageWrapper groupId={id as string}>
        <PostPageWrapper postId={postId as string}>
          <EditProblemPage
            groupId={id as string}
            postId={postId as string}
            problemId={problemId as string}
          />
        </PostPageWrapper>
      </GroupPageWrapper>
    </Wrapper>
  );
};

export default Index;
