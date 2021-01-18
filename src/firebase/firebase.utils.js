import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyClGcaifKiHU615zRA4VuX28cf7W7LeUJc",
    authDomain: "e-store-b4c70.firebaseapp.com",
    projectId: "e-store-b4c70",
    storageBucket: "e-store-b4c70.appspot.com",
    messagingSenderId: "1007797797836",
    appId: "1:1007797797836:web:b29f576c4638b9ff07d369",
    measurementId: "G-G29PZFPFLW"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = userRef.get()
    
    if (!snapShot.exists){
        const { displayName, email } = userAuth
        const createdAt = new Date()
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user',error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
  