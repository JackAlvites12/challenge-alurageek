import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrC5TG6_RK_PbcEN3Gs8AMwg9VDHAryqE",
  authDomain: "react-firebase-alurageek.firebaseapp.com",
  projectId: "react-firebase-alurageek",
  storageBucket: "react-firebase-alurageek.appspot.com",
  messagingSenderId: "1063712364033",
  appId: "1:1063712364033:web:c46a9089ef7d71332fd200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage( app )

export const uploadFile = async ( file ) => {
    const storageRef = ref( storage, file.name )

    return uploadBytes( storageRef, file ).then(snapshot => {
        return getDownloadURL( snapshot.ref ); // Obtiene la URL de descarga del archivo subido
    });
}
