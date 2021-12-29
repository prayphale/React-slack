import 'firebase/auth';
import 'firebase/firestore';

import * as firebase from 'firebase/app';

import { GoogleAuthProvider, getAuth, signInWithRedirect } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXx7ugQ_Vicnw1iJ1UP3D-jTHRqIILxpI",
  authDomain: "react-slack-e61cb.firebaseapp.com",
  projectId: "react-slack-e61cb",
  storageBucket: "react-slack-e61cb.appspot.com",
  messagingSenderId: "807125997644",
  appId: "1:807125997644:web:5e8e24f6889209e7ed3ce9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

const provider = new GoogleAuthProvider();

provider.addScope('profile');
provider.addScope('email');
// signInWithRedirect(auth, provider);

export { auth, provider, db };