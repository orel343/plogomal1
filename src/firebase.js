import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg5k3yelhv2XEBi42LmorldDgsoQgIe5M",
  authDomain: "project-app-10501.firebaseapp.com",
  projectId: "project-app-10501",
  storageBucket: "project-app-10501.appspot.com",
  messagingSenderId: "93502865719",
  appId: "1:93502865719:web:e080b842cf09799f3bdab2",
  measurementId: "G-69LDR8PM8T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, storage, auth, provider };
