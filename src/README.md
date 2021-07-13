## How to use the firebase emulator

1. Get the config variables (you must login to firebase first)
   `firebase functions:config:get > .runtimeconfig.json`
2. `firebase emulators:start`
3. Edit `src/context/FirebaseContext.tsx`: set `shouldUseEmulator` to `true`.
