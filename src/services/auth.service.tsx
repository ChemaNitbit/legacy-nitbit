// Firebase
import { signOut, getAuth } from 'firebase/auth';

const auth = getAuth();

export const signOutService = (navigation: any) => {
    signOut(auth).then((_) => {
        navigation.navigate('Welcome');
    }).catch(error => console.error("SignOut > Error: ", error));
}