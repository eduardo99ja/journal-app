import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDTf_t-FgC2KcCsnueMU2T3vr2im3ZKYo8',
  authDomain: 'journal-app-55d7a.firebaseapp.com',
  databaseURL: 'https://journal-app-55d7a.firebaseio.com',
  projectId: 'journal-app-55d7a',
  storageBucket: 'journal-app-55d7a.appspot.com',
  messagingSenderId: '287173993778',
  appId: '1:287173993778:web:712f58248e5516e586a32b',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()



export {
    db,
    googleAuthProvider,
    firebase
}