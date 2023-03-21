// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB3Fh_waVP6STkECSHNNjT0APWbpFPpW3E',
  authDomain: 'chat-ca17e.firebaseapp.com',
  projectId: 'chat-ca17e',
  storageBucket: 'chat-ca17e.appspot.com',
  messagingSenderId: '192800162726',
  appId: '1:192800162726:web:0eb8454cf7986cf2600567',
  measurementId: 'G-457QV08GGT',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
