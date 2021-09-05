/* eslint-disable import/no-cycle */
import { onNavigate } from '../router/routes.js';

/* eslint-disable no-unused-vars */
const firebaseConfig = {
  apiKey: 'AIzaSyDhl8UbwLZqgbT0ZkSZnECYAijJ6cq-3Yw',
  authDomain: 'echale-la-culpa.firebaseapp.com',
  projectId: 'echale-la-culpa',
  storageBucket: 'echale-la-culpa.appspot.com',
  messagingSenderId: '935955315781',
  appId: '1:935955315781:web:d3f1c617ea7b2e7dec372c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// google
const provider = new firebase.auth.GoogleAuthProvider();

export const login = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user);
      onNavigate('/timeline');
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const observer = async () => {
  let uid = '';
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      uid = user.uid;
      // ...
    } else {
      // onNavigate('/');
      // User is signed out
      // ...
    }
  });
  return uid;
};

export const createUsser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`oh no! ${errorMessage}`);
      console.log(errorCode);
      // ..
    });
};

export const publishPost = (singer, song) => {
  db.collection('post').doc().set({
    singer,
    song,
    likes: 0,
  })
    .then(() => {
      console.log('post creado');
    })
    .catch((error) => {
      console.error('Buu no se creó el post', error);
    });
};

export const getAllPost = async () => {
  let allPosts = [];
  await db.collection('post').onSnapshot((snapshot) => {
    const posts = [];
    snapshot.forEach((doc) => {
      const post = doc.data();
      post.id = doc.id;
      posts.push(post);
      console.log(posts);
    });
    /* querySnapshot.docs.forEach((doc) => {
      const post = doc.data();
      post.id = doc.id;
      posts.push(post);
    }); */
  });
  return allPosts;
};

export const continueWithGoogle = () => {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      onNavigate('/timeline');
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    // ...
    });
};

export const updateLike = (id, uid) => db.collection('post').doc(id).update({
  likes: firebase.firestore.FieldValue.arrayUnion(uid),
});
export const updateUnLike = (id, uid) => db.collection('post').doc(id).update({
  likes: firebase.firestore.FieldValue.arrayRemove(uid),
});
