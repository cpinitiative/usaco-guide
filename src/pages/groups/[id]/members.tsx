import { useRouter } from 'next/router';
import Wrapper, {
  GroupPageWrapper,
} from '../../../components/Groups/GroupWrappers';
import MembersPage from '../../../components/Groups/MembersPage/MembersPage';

const Members = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Wrapper>
      <GroupPageWrapper groupId={id as string}>
        <MembersPage />
      </GroupPageWrapper>
    </Wrapper>
  );
};

export default Members;
