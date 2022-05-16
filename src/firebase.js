import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCKhZ0RfIMSCJSqG7PU3Qj-EcRgp0u5Ea8',
  authDomain: 'ecommerce-b7b51.firebaseapp.com',
  projectId: 'ecommerce-b7b51',
  storageBucket: 'ecommerce-b7b51.appspot.com',
  messagingSenderId: '111125071770',
  appId: '1:111125071770:web:1b92832daabc710ad79c23',
  measurementId: 'G-1WZ1R522SP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
const analytics = getAnalytics(app)
export const db = getFirestore(app)
