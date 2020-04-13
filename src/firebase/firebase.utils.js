import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBUuL1yJT3C0_88Urxtigbd1JN8jJxKcjA",
    authDomain: "marvclothing-db.firebaseapp.com",
    databaseURL: "https://marvclothing-db.firebaseio.com",
    projectId: "marvclothing-db",
    storageBucket: "marvclothing-db.appspot.com",
    messagingSenderId: "759344751789",
    appId: "1:759344751789:web:964a46afc23e847049d224",
    measurementId: "G-CJ3DEG0W4P"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
   const userRef = firestore.doc(`users/${userAuth.uid}`)

   const snapShot = await userRef.get();

   console.log(snapShot);

   if(!snapShot.exists){
     const {displayName, email} = userAuth;
     const createdAt = new Date();

     try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
     } catch(error){
        console.log('error creatin user', error.message);
     }
   }

   return userRef
  
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;