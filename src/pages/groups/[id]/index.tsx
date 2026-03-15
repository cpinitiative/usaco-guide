import { useRouter } from 'next/router';
import GroupPage from '../../../components/Groups/GroupPage/GroupPage';
import Wrapper, {
  GroupPageWrapper,
} from '../../../components/Groups/GroupWrappers';

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Wrapper>
      <GroupPageWrapper groupId={id as string}>
        <GroupPage />
      </GroupPageWrapper>
    </Wrapper>
  );
};

export default Index;
