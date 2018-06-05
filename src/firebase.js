import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAYRDoAsYoeXdxEToKKlJdDN-TNpZa2NG8",
    authDomain: "la-bodega-react.firebaseapp.com",
    databaseURL: "https://la-bodega-react.firebaseio.com",
    projectId: "la-bodega-react",
    storageBucket: "",
    messagingSenderId: "354138799499"
  };
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp
