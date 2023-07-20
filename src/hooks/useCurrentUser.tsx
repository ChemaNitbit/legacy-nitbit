import { useState, useEffect } from 'react';

// Firebase
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { IMAGE_DEFAULT } from '../contants';

export const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [photoURL, setPhotoURL] = useState<string | null>(IMAGE_DEFAULT);

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            if (!!user) {
                setCurrentUser(user);
                setPhotoURL(!!user.photoURL ? user.photoURL : IMAGE_DEFAULT);
            } else {
                setCurrentUser(null);
                setPhotoURL(null);
                // Cerrar sesión
            }
        });

        return (() => {
            unsubscribe();
        })
    });

    return { currentUser, photoURL }
}