const firebaseConfig = {
  apiKey: "AIzaSyCWsrglwTOWG7KNFWBuUxtAptSdpz-jg0w",
  authDomain: "infinityshop999.firebaseapp.com",
  projectId: "infinityshop999"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
