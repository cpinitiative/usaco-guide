# Deploying a Function

Make sure `firebase --version` outputs `13.0.3` or higher. You may need to
re-launch your terminal after running `npm install -g firebase-tools`.

Also, make sure you are using Node v18.

```
npm install -g firebase-tools
firebase login --reauth
firebase projects:list # check that you have access to usaco-guide
cd src/functions
npm install
firebase deploy --only functions:submitContactForm # deploy single function
# firebase deploy --only functions # deploy all functions
```
