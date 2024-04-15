import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Auth, getAuth, User } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from "uuid";

export const firebaseConfig = {
  apiKey: "AIzaSyDWUWeXqoFdp_Cnc9pNp48IXQMjHDgbWis",
  authDomain: "xochimilco-commerce.firebaseapp.com",
  projectId: "xochimilco-commerce",
  storageBucket: "xochimilco-commerce.appspot.com",
  messagingSenderId: "547984527113",
  appId: "1:547984527113:web:6cea7d9cff2341dfda8dd8",
  measurementId: "G-9J6D2N61DH"
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
export const analytics: Analytics = getAnalytics(app);
export const auth: Auth = getAuth(app);
export const currentUser: User | null = auth?.currentUser
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);

/**
 * Function to upolad file to fierbase
 * @param {File} file the file to uplad
 * @returns  {Promise<string>} url of the upladed file
 */

export async function uploadFile(file :any, nameFile : any, folderName: any) {

  try {
    const storageRef = ref(storage, `${folderName}/${v4()}${nameFile}`)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url;
  } catch (error) {
    console.error('Error al cargar el archivo:', error);
    throw error;
  }

}