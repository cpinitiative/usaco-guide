import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Wrapper, {
  GroupPageWrapper,
  PostPageWrapper,
} from '../../../../../components/Groups/GroupWrappers';

const EditPostPage = dynamic(
  () => import('../../../../../components/Groups/EditPostPage/EditPostPage'),
  { ssr: false }
);

const Index = () => {
  const router = useRouter();
  const { id, postId } = router.query;
  return (
    <Wrapper>
      <GroupPageWrapper groupId={id as string}>
        <PostPageWrapper postId={postId as string}>
          <EditPostPage groupId={id as string} postId={postId as string} />
        </PostPageWrapper>
      </GroupPageWrapper>
    </Wrapper>
  );
};

export default Index;
