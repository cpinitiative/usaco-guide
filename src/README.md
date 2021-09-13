## How to use the firebase emulator

1. Get the config variables (you must login to firebase first)
   `firebase functions:config:get > .runtimeconfig.json`
2. `firebase emulators:start`
3. Edit `src/context/FirebaseContext.tsx`: set `shouldUseEmulator` to `true`.

## Development speedup tips

1. Delete src/functions/node_modules (messes with tailwind JIT)
2. Delete pages/editor.tsx and pages/groups.tsx (or have them return an empty
   component). These pages have a lot of dependencies that slow down webpack.
