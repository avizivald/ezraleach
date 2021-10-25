import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBm3fkjpj7fQTCx4OYSs2Fy1ImHfWzunq0",
  authDomain: "helpful-for-synagogues.firebaseapp.com",
  projectId: "helpful-for-synagogues",
  storageBucket: "helpful-for-synagogues.appspot.com",
  messagingSenderId: "534676539233",
  appId: "1:534676539233:web:541274d9eec42aa759e720",
  measurementId: "G-G7FBDS7D9V"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

  try {
    await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
    })

  }catch(error){
    console.log('error creating user ',error.message);

  }


  }
  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;



