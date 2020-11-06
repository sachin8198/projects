import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCrmC0aVnwFelVtuLwRMKwwmbkxDAUW96M",
    authDomain: "clone-b5ec4.firebaseapp.com",
    databaseURL: "https://clone-b5ec4.firebaseio.com",
    projectId: "clone-b5ec4",
    storageBucket: "clone-b5ec4.appspot.com",
    messagingSenderId: "571437645063",
    appId: "1:571437645063:web:e47b38523103cc40d619a2",
    measurementId: "G-C02T4PF6J9"
  };

  const firebseApp = firebase.initializeApp(firebaseConfig)

  const db = firebseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }