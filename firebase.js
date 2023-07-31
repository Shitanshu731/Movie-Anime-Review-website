
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB6RZAPl1YOOsoIBoUEFikQNG9rA-Sm-E0",
  authDomain: "movie-ec9b7.firebaseapp.com",
  projectId: "movie-ec9b7",
  storageBucket: "movie-ec9b7.appspot.com",
  messagingSenderId: "81488541305",
  appId: "1:81488541305:web:05f14223981bc8b8fcc6a8",
  measurementId: "G-3Y4DL9P8V1"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const moviesRef = collection(db,"movies");
export const reviewsRef = collection(db,"reviews");
export default app;  