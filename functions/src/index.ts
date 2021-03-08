import admin from 'firebase-admin';
admin.initializeApp();
import scheduledFirestoreExport from './backups';
import getUsers from './getUsers';
import incrementUsers from './incrementUsers';
// import submitToProblem from "./submitToProblem";
export {
  scheduledFirestoreExport,
  getUsers,
  incrementUsers /* submitToProblem */,
};
