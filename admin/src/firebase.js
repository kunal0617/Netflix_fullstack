import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBnAxKXJdzmoNFKhNx_AGhPkwVlE7J7780",
  authDomain: "netflix-ae1fb.firebaseapp.com",
  projectId: "netflix-ae1fb",
  storageBucket: "netflix-ae1fb.appspot.com",
  messagingSenderId: "383022165930",
  appId: "1:383022165930:web:2125675140c3044e6105d3",
  measurementId: "G-F2LTDK6DE1",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
