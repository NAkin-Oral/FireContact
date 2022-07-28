// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBtqUISWDYByq2LjbpVa1FAoN1UdUCTSA4',
  authDomain: 'fire-contc.firebaseapp.com',
  databaseURL:
    'https://fire-contc-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fire-contc',
  storageBucket: 'fire-contc.appspot.com',
  messagingSenderId: '334480969217',
  appId: '1:334480969217:web:d8b05675d0696c46dafa00',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
