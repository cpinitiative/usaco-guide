import admin from "firebase-admin";
import * as functions from "firebase-functions";
import getJoinKeyData from "./utils/getJoinKeyData";
interface submitToProblemArgs {
  key: string;
}

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.https.onCall(async (request) => {
  const { key } = request.data as submitToProblemArgs;
  let keyData;
  try {
    keyData = await getJoinKeyData(key);
  } catch (e: any) {
    return {
      success: false,
      errorCode: e.errorCode,
      message: e.message,
    };
  }
  const groupData = await admin
    .firestore()
    .collection("groups")
    .doc(keyData.groupId)
    .get()
    .then((snapshot) => snapshot.data());
  return {
    success: true,
    name: groupData.name,
  };
});
