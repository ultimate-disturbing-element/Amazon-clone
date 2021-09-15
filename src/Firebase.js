import firebase from 'firebase';
 const firebaseConfig = {
    apiKey: "AIzaSyCcbbxOj7Zhrqv4pA-vycFNRG_CDgKC0Oo",
    authDomain: "clone-971bc.firebaseapp.com",
    projectId: "clone-971bc",
    storageBucket: "clone-971bc.appspot.com",
    messagingSenderId: "227106819133",
    appId: "1:227106819133:web:633913f5044a3ae3d16e54"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  
  export {auth};