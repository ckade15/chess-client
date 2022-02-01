// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
require('dotenv').config()

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Make sure to secure keys in .env file

const firebaseConfig = {

  apiKey: api-key,

  authDomain: auth-domain,

  projectId: project-id,

  storageBucket: storage-bucket,

  messagingSenderId: messaging-sender-id,

  appId: app-id,

  measurementId: measurement-id

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);