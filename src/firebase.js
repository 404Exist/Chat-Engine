import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAiNxIlb7sw2Twwn5736MIvDDtC3l9lppQ",
  authDomain: "chatapp-2937b.firebaseapp.com",
  projectId: "chatapp-2937b",
  storageBucket: "chatapp-2937b.appspot.com",
  messagingSenderId: "579429016615",
  appId: "1:579429016615:web:4b92fa48676c2f31939a02"
}).auth();