import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCKBx_Fte9PE9F0c0BoANXW0vctqrwMvEw',
  authDomain: 'vitea-20b6e.firebaseapp.com',
  projectId: 'vitea-20b6e',
  storageBucket: 'vitea-20b6e.appspot.com',
  messagingSenderId: '890104696206',
  appId: '1:890104696206:web:3bfa0a713aec1de8dda8df',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }
