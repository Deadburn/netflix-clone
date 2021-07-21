import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase  } from './seed';


const config  = {
  apiKey: "AIzaSyCDHhoRvFIsNSZwV1_B5XS8J7NRb3xRrHE",
    authDomain: "netflix-scrimba-d4b08.firebaseapp.com",
    databaseURL: "https://netflix-scrimba-d4b08.firebaseio.com",
    projectId: "netflix-scrimba-d4b08",
    storageBucket: "netflix-scrimba-d4b08.appspot.com",
    messagingSenderId: "10187969455",
    appId: "1:10187969455:web:78b92c705b83165c20955a"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase }
