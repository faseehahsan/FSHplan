import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBmryFOaAg2QspCLz9BnpRzb7oeTmPL9gY",
    authDomain: "fshproject-9259d.firebaseapp.com",
    databaseURL: "https://fshproject-9259d.firebaseio.com",
    projectId: "fshproject-9259d",
    storageBucket: "fshproject-9259d.appspot.com",
    messagingSenderId: "670056418788",
    appId: "1:670056418788:web:f66153b0237857f5f50bf1",
    measurementId: "G-1XYLN5L3M1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;