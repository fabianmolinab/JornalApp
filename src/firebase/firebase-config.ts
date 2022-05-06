import firebase, { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { GoogleAuthProvider } from 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAw3ZwtDZ27RXSdSCxFR4K41gf2mXI2T9I',
  authDomain: 'journal-app-be9f3.firebaseapp.com',
  projectId: 'journal-app-be9f3',
  storageBucket: 'journal-app-be9f3.appspot.com',
  messagingSenderId: '710212662927',
  appId: '1:710212662927:web:c3c4db5b90f366b96762fa'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const googleAuthProvider = new GoogleAuthProvider()

export { db, googleAuthProvider }
