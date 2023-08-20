// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import config from './src/shared/application/config';

const {FIREBASE_CONFIG} = config;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: FIREBASE_CONFIG.FIREBASE_API_KEY,
  authDomain: FIREBASE_CONFIG.FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_CONFIG.FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_CONFIG.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_CONFIG.FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_CONFIG.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestoreDB = getFirestore(app);
export const storage = getStorage(app);
