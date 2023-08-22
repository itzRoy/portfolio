// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBOZd-Goh4SL7lsfW2NiRpZSC2PdjxhCu8',
    authDomain: 'portfolio-962c7.firebaseapp.com',
    projectId: 'portfolio-962c7',
    storageBucket: 'portfolio-962c7.appspot.com',
    messagingSenderId: '210574369711',
    appId: '1:210574369711:web:4d4bd1dedb00a0b7bd855a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database

export default app;
export { db };
