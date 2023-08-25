import { UserData, useUpdateUserData, useUserData } from '../UserDataContext';

export function createUserDataGetter<ReturnValue>(
  getter: (userData: UserData) => ReturnValue
): () => ReturnValue {
  return () => {
    const userData = useUserData();
    return getter(userData);
  };
}

export function createUserDataMutation<UpdatePayload>(
  mutation: (
    userData: UserData,
    updatePayload: UpdatePayload
  ) => Partial<UserData>
): () => (updatePayload: UpdatePayload) => void {
  return () => {
    const updateUserData = useUpdateUserData();
    return updatePayload => {
      updateUserData((prevUserData: UserData) =>
        mutation(prevUserData, updatePayload)
      );
    };
  };
}
