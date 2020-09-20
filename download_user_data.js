// https://github.com/dalenguyen/firestore-import-export
fs = require('fs');

const firestoreService = require('firestore-export-import');
const serviceAccount = require('./service.json');

// Initiate Firebase App
// appName is optional, you can omit it.
const appName = '[DEFAULT]';
const databaseURL = 'https://usaco-guide.firebaseio.com';
firestoreService.initializeApp(serviceAccount, databaseURL, appName);

// Start exporting your data
firestoreService.backup('users').then(data =>
  fs.writeFile('user_data.json', JSON.stringify(data), function (err) {
    if (err) return console.log(err);
    console.log('OK');
  })
);
