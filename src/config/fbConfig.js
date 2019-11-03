import firebase from 'firebase/app';

import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBXRJH9FYoqjFRb9zuIVGleHtW0bH7H-Dw',
  authDomain: 'shop-cms-8183d.firebaseapp.com',
  databaseURL: 'https://shop-cms-8183d.firebaseio.com',
  projectId: 'shop-cms-8183d',
  storageBucket: 'shop-cms-8183d.appspot.com',
  messagingSenderId: '763438063663',
  appId: '1:763438063663:web:331d18a7a0b7de828c26da',
  measurementId: 'G-NBMQG84YH0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
