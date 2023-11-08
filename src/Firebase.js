import firebase from 'firebase';
 const firebaseConfig = {
  apiKey:"AIzaSyA-c9P1_EipelmD1OBiKwumCH6lBZbDEAM",
  authDomain: "amazo-nclonereact.firebaseapp.com",
  projectId: "amazo-nclonereact",
  storageBucket: "amazo-nclonereact.appspot.com",
  messagingSenderId: "967321908855",
  appId: "1:967321908855:web:7c98021e6715212268f872",
  measurementId: "G-RJ3NEF479D"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  
  export {auth};