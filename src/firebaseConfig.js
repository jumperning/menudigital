import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
	apiKey: 'AIzaSyBm0U7paRPYsg2NbBcgsJ6AY2drvRijW40',
	authDomain: 'menudigital-976f2.firebaseapp.com',
	databaseURL: 'https://menu-digital-bc77f.firebaseio.com',
	projectId: 'menudigital-976f2',
	storageBucket: 'menudigital-976f2.appspot.com',
	messagingSenderId: '192376512536',
	appId: '1:192376512536:web:4a8f9c8918b00eb59be36d',
	// measurementId: 'G-95X8K43CRJ',
})

export const database = app.firestore()

export default app
