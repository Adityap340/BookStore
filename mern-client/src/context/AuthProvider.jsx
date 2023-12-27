import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { onAuthStateChanged,createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
const provider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOut = () => {
        setLoading(true);
        return auth.signOut();
    
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(user);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            return unsubscribe();
        }     
    }, [])
    const authInfo = {
        user,
        createUser,
        loginWithGoogle,
        loading,
        login,
        signOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider