import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBEscsCbCTCenHtfix7BpKd8SqrpZZXzs4",
    authDomain: "rick-morty-severylov-stepan.firebaseapp.com",
    projectId: "rick-morty-severylov-stepan",
    storageBucket: "rick-morty-severylov-stepan.appspot.com",
    messagingSenderId: "793497750847",
    appId: "1:793497750847:web:8fd92576ead3923543178a",
    measurementId: "G-Q4PNPPMFEF"
};

const app = initializeApp(firebaseConfig)
const auth = firebase.auth