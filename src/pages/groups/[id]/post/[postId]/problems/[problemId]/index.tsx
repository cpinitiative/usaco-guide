import Wrapper, {
  GroupPageWrapper,
  PostPageWrapper,
} from "../../../../../../../components/Groups/GroupWrappers";
import { useRouter } from "next/router";
import ProblemPage from "../../../../../../../components/Groups/ProblemPage/ProblemPage";

const Index = () => {
  const router = useRouter();
  const { id, postId, problemId } = router.query;
  return (
    <Wrapper>
      <GroupPageWrapper groupId={id as string}>
        <PostPageWrapper postId={postId as string}>
          <ProblemPage
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
