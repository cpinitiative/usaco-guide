## How to use the firebase emulator

1. Get the config variables (you must login to firebase first)
   `firebase functions:config:get > .runtimeconfig.json`
2. `yarn server`
3. Edit firebase context to use the emulator: uncomment the useemulator line

```ts
Promise.all([app, auth, firestore, database, functions]).then(values => {
const firebaseInstance = values[0].default;
firebaseInstance.initializeApp(firebaseConfig);
// firebaseInstance.functions().useEmulator("localhost", 5001);
setFirebase(firebaseInstance);
});
```
