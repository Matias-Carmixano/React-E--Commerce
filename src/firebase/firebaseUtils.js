import { initializeApp } from "firebase/app";
import { actionCodeSettingsForgotPassword, actionCodeSettingsVerification, firebaseConfig } from "./firebaseConfig";
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'

// inicializamos firebase
const app = initializeApp(firebaseConfig);
// firestore funciones, 
export const fireStore = getFirestore(app);


export const createUserProfileDocument = async userAuth =>{
     if (!userAuth || !userAuth.emailVerified)  return;

     const userRef = doc(fireStore, `users/${userAuth/*.uid*/}`)
     console.log('userRef======>', userRef);
     const snapShote = await getDoc(userRef);

     if(!snapShote.exists()) {
        const {displayName, email, photoUrl} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(doc(fireStore,`users/${userAuth/*,uid*/}`), 
            {
                displayName: displayName || localStorage.getItem('username'),
                email,
                photoUrl,
                createdAt
            });
        } catch (error) {
            console.log(error);
        }
     }
    return userRef;
};

export const auth = getAuth();

auth.useDeviceLanguage();

export const createUser = (email, password, displayName) => 
createUserWithEmailAndPassword(auth, email, password).then(
    userCredencial => 
    sendEmailVerification(
        userCredencial.user,
        actionCodeSettingsVerification
        ).then(()=>{
            alert(`Mensaje de verifacion enviado al mail ${email}`);
            localStorage.setItem('username', displayName);
        })
    )
export const signInUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

export const resetPassword = (email) =>
    sendPasswordResetEmail(auth, email, actionCodeSettingsForgotPassword).then(
        () => alert(`Mensaje de verificación enviado al mail ${email}`)
    );

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithGoogle(auth, provider);