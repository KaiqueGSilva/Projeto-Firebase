import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAchIk-8ssvRtvbANoX-T0bQzHn1lOJT8o",
  authDomain: "userprofiles-a034a.firebaseapp.com",
  projectId: "userprofiles-a034a",
  storageBucket: "userprofiles-a034a.appspot.com",
  messagingSenderId: "751755618184",
  appId: "1:751755618184:web:e2cac599c4972b6877fc3d",
  measurementId: "G-VC6SX7CRRB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);