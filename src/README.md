## How to use the firebase emulator

1. Get the config variables (you must login to firebase first)
   `firebase functions:config:get > .runtimeconfig.json`
2. `firebase emulators:start`
3. Edit `src/context/FirebaseContext.tsx`: set `shouldUseEmulator` to `true`.

## Development speedup tips

To make development even faster, you can take advantage of tailwind incremental
builds (which don't seem to work with the default postcss setup for some
reason).

1. In `gatsby-browser.tsx`, change the css import to `./build.css` instead of
   `./src/styles/main.css`.
2. Run
   `npx cross-env TAILWIND_MODE=watch postcss src/styles/main.css -o build.css --watch`
   (or the equivalent on your platform)
3. Run `gatsby develop`

I get a consistent 1s hot reload with this
