// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgrzJhIsRt0qcYdT9EcCy17QhJmf0Mqbc",
  authDomain: "assignment-facdf.firebaseapp.com",
  projectId: "assignment-facdf",
  storageBucket: "assignment-facdf.appspot.com",
  messagingSenderId: "687499516697",
  appId: "1:687499516697:web:cc9828a8912dfd4cbd8388"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const movieRef = collection(db,'data');
export default app;

