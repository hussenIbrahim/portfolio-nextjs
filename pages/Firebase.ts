import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWmdsw9IMEifvWb6CXP-TXJWVFLFw7JwM",
  authDomain: "portofilo-a89ee.firebaseapp.com",
  projectId: "portofilo-a89ee",
  storageBucket: "portofilo-a89ee.appspot.com",
  messagingSenderId: "193298408091",
  appId: "1:193298408091:web:0794023b634fced8749c3e",
  measurementId: "G-2E8B6YPY0C",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
