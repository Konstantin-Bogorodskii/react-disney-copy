import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDueykQa_lDhDx2VcT3h2fvG1pW04d93YU',
  authDomain: 'disney-clone-47447.firebaseapp.com',
  projectId: 'disney-clone-47447',
  storageBucket: 'disney-clone-47447.appspot.com',
  messagingSenderId: '619090768138',
  appId: '1:619090768138:web:8b8370fd7f0df4a5f9caf3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
