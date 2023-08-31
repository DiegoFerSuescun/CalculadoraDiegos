import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyByx_J9Ob9T7jlt3nwtMdNnK71DvZvliIA",
  authDomain: "calculadoradiegos.firebaseapp.com",
  projectId: "calculadoradiegos",
  storageBucket: "calculadoradiegos.appspot.com",
  messagingSenderId: "92680825651",
  appId: "1:92680825651:web:b0177ffb1739f962c12c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)