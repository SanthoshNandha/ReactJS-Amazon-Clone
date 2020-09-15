import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyDSN-pvdN8ut2Bn_DsqdNvb7tfu0eDMhTI",
        authDomain: "clone-test-76524.firebaseapp.com",
        databaseURL: "https://clone-test-76524.firebaseio.com",
        projectId: "clone-test-76524",
        storageBucket: "clone-test-76524.appspot.com",
        messagingSenderId: "845554897444",
        appId: "1:845554897444:web:9fa7eb7bd3eef2d723feb1",
        measurementId: "G-SF0X30PWNZ"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };