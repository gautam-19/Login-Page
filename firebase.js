import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiiZ90sfOewCe4ATX7sVwM1MjLaOJzFdQ",
    authDomain: "login-page-4d0d8.firebaseapp.com",
    databaseURL: "https://login-page-4d0d8-default-rtdb.firebaseio.com",
    projectId: "login-page-4d0d8",
    storageBucket: "login-page-4d0d8.appspot.com",
    messagingSenderId: "503459543909",
    appId: "1:503459543909:web:b5790f43a21d860baabf8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// SignIn
document.getElementById('signin').addEventListener('click', function (event) {
    event.preventDefault();

    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("Sign In Successful!");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ...
        });
});

// SignUp
document.getElementById('signup').addEventListener('click', function (event) {
    event.preventDefault();

    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Sign Up Successful!");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ...
        });
});
