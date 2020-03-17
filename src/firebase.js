import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBluGdDDTw6OYCm2ZlFn8acWYR9_GHtjyo',
  authDomain: 'm-city-53901.firebaseapp.com',
  databaseURL: 'https://m-city-53901.firebaseio.com',
  projectId: 'm-city-53901',
  storageBucket: 'm-city-53901.appspot.com',
  messagingSenderId: '161954735457',
  appId: '1:161954735457:web:ae045be5766c2cdcc09120'
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebaseDB
};
