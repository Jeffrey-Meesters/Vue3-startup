import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYg--zVP-2npJF-97-plgybSnTVsNsDyY",
  authDomain: "fir-v9-9a681.firebaseapp.com",
  projectId: "fir-v9-9a681",
  storageBucket: "fir-v9-9a681.appspot.com",
  messagingSenderId: "365335304189",
  appId: "1:365335304189:web:8133e5b818400c11d8ab94",
};

// Initialize Firebase with a "default" Firebase project
const defaultProject = initializeApp(firebaseConfig);

// Option 1: Access Firebase services via the defaultProject variable
const db = getFirestore(defaultProject);

export { db };
