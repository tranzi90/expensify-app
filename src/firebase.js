import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDxQykhBEzdvQJ84V27XbMIKspqKzRHDKE",
    authDomain: "expensify-80605.firebaseapp.com",
    databaseURL: (process.env.NODE_ENV !== 'test') ? "https://expensify-80605.firebaseio.com" : "https://expensify-test-cc998.firebaseio.com",
    projectId: "expensify-80605",
    storageBucket: "expensify-80605.appspot.com",
    messagingSenderId: "350585603477",
    appId: "1:350585603477:web:3a152b5f857ee9f5e5629c",
    measurementId: "G-YR9MXGYSWG"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }