import Wrapper, {
  GroupPageWrapper,
  PostPageWrapper,
} from "../../../../../components/Groups/GroupWrappers";
import { useRouter } from "next/router";
import PostPage from "../../../../../components/Groups/PostPage/PostPage";

const Index = () => {
  const router = useRouter();
  const { id, postId } = router.query;
  return (
    <Wrapper>
      <GroupPageWrapper groupId={id as string}>
        <PostPageWrapper postId={postId as string}>
          <PostPage groupId={id as string} postId={postId as string} />
        </PostPageWrapper>
      </GroupPageWrapper>
    </Wrapper>
  );
};

export default Index;
