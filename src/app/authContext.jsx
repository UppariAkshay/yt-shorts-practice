'use client'
import { createContext } from "react";
import React, { useContext, useEffect } from 'react'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { api } from '../../convex/_generated/api';
import {useMutation} from 'convex/react'
import { useState } from 'react';
import { auth } from '@/app/configs/firebaseConfigs';
import { redirect } from 'next/navigation';



export const AuthContext = createContext()


function AuthenticationProvider({children}) {
    const [userData, setUserData] = useState()
    const addNewUser = useMutation(api.queries.addNewUser)
    const route = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              console.log(user, 'firebaseAuth UserData')
              setUserData(user)
              // ...
            } else {
              // User is signed out
              // ...
              // redirect('/')
              setUserData(null)
            }
          });
        // setUserData(['123213', '123cc23'])

    }, [])

    function signInClicked()
    {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
        .then(async (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            if (user)
            {
                setUserData(user)
                const result = await addNewUser({username: user?.displayName, email: user?.email, photoUrl: user?.photoURL})
                console.log(result, 'add Newuser result')
                route.push('/dashboard')
            }
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
        
    }

    // useEffect(() => {
    //   if (!userData) {
    //     route.replace('/');
    //   }
    // }, [userData]);

    
    
    

  return (
    <AuthContext.Provider value={{userData, signInClicked}} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthenticationProvider