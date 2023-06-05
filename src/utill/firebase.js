import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCOiQWW752ZasEXbvr9PXcA1Rximsb2knU",
  authDomain: "daylog-d368c.firebaseapp.com",
  databaseURL: "https://daylog-d368c-default-rtdb.firebaseio.com",
  projectId: "daylog-d368c",
  storageBucket: "daylog-d368c.appspot.com",
  messagingSenderId: "1056001475604",
  appId: "1:1056001475604:web:088f53744acc3ac93e1301",
  measurementId: "G-XC7P5FVCWY",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
