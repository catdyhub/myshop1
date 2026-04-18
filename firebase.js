const firebaseConfig = {
  apiKey: "AIzaSyCWsrglwTOWG7KNFWBuUxtAptSdpz-jg0w",
  authDomain: "infinityshop999.firebaseapp.com",
  projectId: "infinityshop999",
  storageBucket: "infinityshop999.firebasestorage.app",
  messagingSenderId: "688652453993",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
