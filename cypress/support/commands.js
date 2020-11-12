import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { attachCustomCommands } from "cypress-firebase";

const fbConfig = {
  apiKey: "AIzaSyBYajl4hgIoH_c35xc3EMW3XVZ7qeWu3Eo",
  authDomain: "usaco-guide-sample.firebaseapp.com",
  databaseURL: "https://usaco-guide-sample.firebaseio.com",
  projectId: "usaco-guide-sample",
  storageBucket: "usaco-guide-sample.appspot.com",
  messagingSenderId: "90939059194",
  appId: "1:90939059194:web:b0946fab9766d878f55243",
  measurementId: "G-7TZJWE960M"
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });