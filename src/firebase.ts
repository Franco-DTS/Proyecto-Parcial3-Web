
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDq_84T1plfiBkVXg3Cneexy4GBpV-BeZo",
    authDomain: "parcial3-proyecto.firebaseapp.com",
    projectId: "parcial3-proyecto",
    storageBucket: "parcial3-proyecto.appspot.com",
    messagingSenderId: "797177100517",
    appId: "1:797177100517:web:c5bdf18a227bfe6c69bc0c"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);