import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fir-upload-firebase-8e6f4.firebaseapp.com",
  projectId: "fir-upload-firebase-8e6f4",
  storageBucket: "fir-upload-firebase-8e6f4.appspot.com",
  messagingSenderId: "962120143322",
  appId: "1:962120143322:web:7dc78a06e2a988964530e3",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
