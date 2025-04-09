'use client'

import { redirect } from "next/navigation";
import AuthenticationProvider, { AuthContext } from "./authContext";
import React, { useContext, useEffect } from 'react'
import { useRouter } from "next/navigation";

function Authentication({children}) {
    const {userData} = useContext(AuthContext)
    console.log(userData, 'this is user data')
    const route = useRouter()

    useEffect(() => {
        console.log('useEffect triggerred')
        if (userData===null)
        {
            route.replace('/');
        }
    }, [route, userData])

    // if (userData === null || userData === undefined)
    // {
    //     console.log('returned null')
    //     return null
    // }

    return children

  
}

export default Authentication