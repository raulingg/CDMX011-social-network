import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAxKjqTudxBWi9j9i4IDKn450hmM1m_w3A',
  authDomain: 'red-social-coaches.firebaseapp.com',
  projectId: 'red-social-coaches',
  appId: '1:489293961166:web:e0ae10e7b6db857d26fd9f',
};

firebase.initializeApp(firebaseConfig);

export const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();

export const getUser = () => firebase.auth().currentUser;
