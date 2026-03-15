import { useRouter } from 'next/router';
import EditGroupPage from '../../../components/Groups/EditGroupPage/EditGroupPage';
import Wrapper, {
  GroupPageWrapper,
} from '../../../components/Groups/GroupWrappers';

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Wrapper>
      <GroupPageWrapper groupId={id as string}>
        <EditGroupPage groupId={id as string} />
      </GroupPageWrapper>
    </Wrapper>
  );
};

export default Edit;
