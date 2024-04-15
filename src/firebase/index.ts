import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Auth, getAuth, User } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from "uuid";

export const firebaseConfig = {
  apiKey: "AIzaSyBQxvYvalPyyVzzYu6ey9XrHllO1XHJU5I",
  authDomain: "xochicalli-commerce.firebaseapp.com",
  projectId: "xochicalli-commerce",
  storageBucket: "xochicalli-commerce.appspot.com",
  messagingSenderId: "1065447557124",
  appId: "1:1065447557124:web:89a3b272c996a79f214d51",
  measurementId: "G-L3DNKLN90J",
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