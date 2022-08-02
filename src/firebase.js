import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyChqscgbaHsjpOSVd0MopsyITmBW-FlW7A",
    authDomain: "todo-crud-754a6.firebaseapp.com",
    projectId: "todo-crud-754a6",
    storageBucket: "todo-crud-754a6.appspot.com",
    messagingSenderId: "851278375766",
    appId: "1:851278375766:web:6f071d90827e9908bc04f7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };