// Firebase
import { 
    signOut, 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    User
} from 'firebase/auth';

import { firestoreDB } from '../../firebase-config';
import { setDoc, doc } from 'firebase/firestore';
import { auth } from '../../firebase-config';

import { ICredentials } from '../interfaces/credentials.interface';
import {UserType} from '../@types/user.type';

const currentAuth = getAuth();

export const onLogin = (credentials: ICredentials, navigation: any) => {
    const {email, password} = credentials;
    signInWithEmailAndPassword(auth, email, password).then(response => {
        navigation.navigate('Splash');
    }).catch(error => console.log("SignIn > Error: ", error));
}

export const onSignUp = (payload: UserType, navigation: any) => {

    const { email, password, name } = payload;
    if(!!email && !!password){
        createUserWithEmailAndPassword(auth, email, password).then((response) => {
            const docRef = doc(firestoreDB, 'users', response.user.uid);
            return setDoc(docRef, payload);
        }).then(createUserResponse => {
            const authUser = getAuth();
            return updateProfile((authUser.currentUser as User), { displayName: name })
        }).then(updateProfileResponse => {
           navigation.navigate('Login')
        }).catch(error => console.error("SignUp > Error: ", error));
    }
}

export const getCurrentUser = (): User | null => {
    const user = getAuth().currentUser as User;

    return !!user ? user : null;
}

export const signOutService = (navigation: any) => {
    signOut(currentAuth).then((_) => {
        navigation.navigate('Welcome');
    }).catch(error => console.error("SignOut > Error: ", error));
}