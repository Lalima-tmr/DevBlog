// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFXv-e36UPUMrlOhWMP5gykO3bLA42W8Y",
  authDomain: "devblog-d5803.firebaseapp.com",
  projectId: "devblog-d5803",
  storageBucket: "devblog-d5803.appspot.com",
  messagingSenderId: "762385671270",
  appId: "1:762385671270:web:c2bf65e6db1fe6e42bb9a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDb, auth, storage };