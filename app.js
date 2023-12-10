// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtBj9Um6jjN9Pdw2QL1u-pE-hk1l5ggXM",
  authDomain: "data-120a6.firebaseapp.com",
  projectId: "data-120a6",
  storageBucket: "data-120a6.appspot.com",
  messagingSenderId: "925899075944",
  appId: "1:925899075944:web:d2be3922ca662a7b26e6dd",
  measurementId: "G-PN5WH2C5VY",
};

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in");
  } else {
    console.log("no user");
  }
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// var name = document.getElementById("name");
// var phone1 = document.getElementById("phone1");
// var lottery = document.getElementById("lottery");
// var date = document.getElementById("date");
// var btn = document.getElementById("check_no")

// btn.addEventListener("click", signup)

// function signup (e) {
//   e.preventDefault();
//   var obj = {
//     name: name.value,
//     phone1: phone1,
//     lottery: lottery,
//     date: date,
//   };

//   firebase
//     .auth()
//     .signInWithPhoneNumber(`+91${obj.phone1}`, window.recaptchaVerifier)
//     .then((confirmationResult) => {
//       alert("A confirmation message was just sent.");
//       var code = window.prompt("Please enter the 6 digit code");
//       return confirmationResult.confirm(code);
//     }).then((result) =>{

//       createUserWithPhone(auth, obj.name.phone1.lottery.date)
//     .then(function (success) {})
//     .catch(function (err) {
//       alert("error" + err);
//     })
//   console.log(obj)
// }).catch((errror)=>{
//  alert="Cannot signup sorry"
// })
