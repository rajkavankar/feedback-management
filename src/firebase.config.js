// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsNQ1njIDdUSHUvyB_A3BXuVYA1rYpPHg",
  authDomain: "feedback-app-37dd6.firebaseapp.com",
  projectId: "feedback-app-37dd6",
  storageBucket: "feedback-app-37dd6.appspot.com",
  messagingSenderId: "89969707155",
  appId: "1:89969707155:web:73ddb1b7903c282c586566",
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
