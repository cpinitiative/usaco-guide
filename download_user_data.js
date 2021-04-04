const serviceAccount = require('./service.json');
const admin = require('firebase-admin');
const fs = require('fs');
const stuff = require('./problemsList');
let urlToNewIDMap = stuff.urlToNewIDMap;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// admin
//   .auth()
//   .setCustomUserClaims('[insert user id]', {
//     isAdmin: true,
//     canModerate: true,
//     canCreateGroups: true,
//   })
//   .then(() => {
//     // The new custom claims will propagate to the user's ID token the
//     // next time a new one is issued.
//     console.log('DONE');
//   });

// Migrate problem IDs for user solutions
db.collection('userProblemSolutions')
  .get()
  .then(snapshot => {
    let ct = 0,
      badCt = 0;
    snapshot.docs.forEach(doc => {
      ct++;
      if (!urlToNewIDMap.hasOwnProperty(doc.data().problemID)) {
        console.error('BAD', doc.data().problemID);
        badCt++;
      } else {
        // console.log(doc.data().problemID, "==>", urlToNewIDMap[doc.data().problemID])
        doc.ref.update({
          problemID: urlToNewIDMap[doc.data().problemID],
        });
      }
    });
    console.log('updating', ct, 'with bad ct', badCt);
  });
// End migrate problem IDs

// let userData = {};
// const listAllUsers = nextPageToken => {
//   admin
//     .auth()
//     .listUsers(1000, nextPageToken)
//     .then(function (listUsersResult) {
//       listUsersResult.users.forEach(function (userRecord) {
//         userData[userRecord.uid] = userRecord.toJSON();
//       });
//       if (listUsersResult.pageToken) {
//         listAllUsers(listUsersResult.pageToken);
//       } else {
//         console.log('DONE');
//
//         db.collectionGroup('solutions')
//           .get()
//           .then(snapshot => {
//             snapshot.docs.map(doc => {
//               let data = doc.data();
//               let isPython =
//                 data.solutionCode.includes('print(') ||
//                 data.solutionCode.includes('.readline().split()') ||
//                 data.solutionCode.includes(' open(') ||
//                 data.solutionCode.includes('in range(');
//               let isJava =
//                 data.solutionCode.includes('import java.') ||
//                 data.solutionCode.includes('static void main');
//               if (isJava) isPython = false;
//               let isCpp =
//                 data.solutionCode.includes('#include ') ||
//                 data.solutionCode.includes('#include') ||
//                 data.solutionCode.includes('int main()') ||
//                 data.solutionCode.includes('cout <<') ||
//                 data.solutionCode.includes('cout<<');
//               if (data.solutionCode.includes('#define ')) isPython = false;
//               if (
//                 data.solutionCode.includes(
//                   ' This is actually code for IOI 97 Game'
//                 )
//               )
//                 isCpp = 1;
//               if (data.solutionCode.includes('for(int i=0,x,y;i<4096;i++)'))
//                 isCpp = 1;
//               if (data.solutionCode.includes(`class Solution {`)) isJava = 1;
//               if (
//                 data.solutionCode.includes(
//                   'bruh so apparently, limit on MEMORY USAGE (allocation'
//                 )
//               )
//                 isCpp = 1;
//               let lang = 'py';
//               if (isJava) lang = 'java';
//               if (isCpp) lang = 'cpp';
//               if (isPython + isJava + isCpp != 1) {
//                 lang = 'unknown';
//               }
//               // console.log(doc.data())
//               let problemId = doc.ref.parent.parent.id;
//               if (problemId.includes('yosupo')) {
//                 problemId = problemId.replace(
//                   'https:__judge.yosupo.jp_problem_',
//                   'https://judge.yosupo.jp/problem/'
//                 );
//               } else {
//                 problemId = problemId.replace(/_/g, '/');
//               }
//               if (problemId.includes('atcoder.jp')) {
//                 problemId[problemId.length - 2] = '_';
//               }
//
//               console.log(
//                 data.userID
//                   ? userData[data.userID].displayName
//                   : 'Unknown User: ' + data.userID
//               );
//               return db.collection('userProblemSolutions').add({
//                 ...data,
//                 userName: data.userID
//                   ? userData[data.userID].displayName
//                   : 'Unknown User',
//                 problemID: problemId,
//                 language: lang,
//               });
//             });
//           })
//           .then(() => {
//             console.log('done');
//           })
//           .catch(error => {
//             console.log(error);
//           });
//         // fs.writeFile('auth_data.json', JSON.stringify(data), function (err) {
//         //   if (err) return console.log(err);
//         //   console.log('OK');
//         // });
//       }
//     })
//     .catch(function (error) {
//       console.log('Error listing users:', error);
//     });
// };
// listAllUsers();

// let loggedin = 0,
//   not = 0;
// db.collectionGroup('solutions')
//   .get()
//   .then(snapshot => {
//     snapshot.docs.forEach(doc => {
//       let data = doc.data();
//       if (data.userID) loggedin++;
//       else not++;
//     });
//   })
//   .then(() => {
//     console.log(loggedin, not);
//   });

// db.collection('userProblemSolutions')
//   .get()
//   .then(snapshot => {
//     return Promise.all(
//       snapshot.docs.map(doc => {
//         if (!doc.data().timestamp) {
//           return db
//             .collection('userProblemSolutions')
//             .doc(doc.id)
//             .update({
//               timestamp: admin.firestore.Timestamp.fromDate(
//                 new Date(2021, 2, 8)
//               ),
//             });
//         }
//       })
//     );
//   })
//   .then(() => {
//     console.log('done');
//   });

// db.collection('users')
//   .get()
//   .then(snapshot => {
//     let data = {};
//     snapshot.forEach(doc => {
//       data[doc.id] = doc.data();
//     });
//     return data;
//   })
//   .then(data => {
//     fs.writeFile('user_data.json', JSON.stringify(data), function (err) {
//       if (err) return console.log(err);
//       console.log('OK');
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });
