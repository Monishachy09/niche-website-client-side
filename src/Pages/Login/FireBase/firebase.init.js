import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const InitializationAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default InitializationAuthentication;