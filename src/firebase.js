import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyANEcOY0Dld5OtP29KIJ2oJvD5m93pwuOs",
    authDomain: "slackapp-jsclone.firebaseapp.com",
    projectId: "slackapp-jsclone",
    storageBucket: "slackapp-jsclone.appspot.com",
    messagingSenderId: "355179968244",
    appId: "1:355179968244:web:2a89a927d3c17a525250a1"
};




const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
    

export { auth, provider };
export default db;