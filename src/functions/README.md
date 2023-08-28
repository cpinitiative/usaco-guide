# Deploying a Function

```
npm install -g firebase-tools
firebase login --reauth
firebase projects:list # check that you have access to usaco-guide
cd src/functions
npm install
firebase deploy --only functions:submitContactForm # deploy single function
# firebase deploy --only functions # deploy all functions
```
