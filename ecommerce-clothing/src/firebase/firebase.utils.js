import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXCYcIKQtbtmOYGUTattaOmP17oZ8yBZU",
    authDomain: "ecommerce-crwn-db.firebaseapp.com",
    databaseURL: "https://ecommerce-crwn-db.firebaseio.com",
    projectId: "ecommerce-crwn-db",
    storageBucket: "ecommerce-crwn-db.appspot.com",
    messagingSenderId: "771237642203",
    appId: "1:771237642203:web:5170694e852b159314b1fe",
    measurementId: "G-07V6ML38QY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;