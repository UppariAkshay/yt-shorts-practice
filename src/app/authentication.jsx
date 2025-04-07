'use client'

import { redirect } from "next/navigation";
import AuthenticationProvider, { AuthContext } from "./authContext";
import React, { useContext, useEffect } from 'react'
import { useRouter } from "next/navigation";

function Authentication({children}) {
    const {userData} = useContext(AuthContext)
    console.log(userData)
    const route = useRouter()

    useEffect(() => {
        console.log('useEffect triggerred')
        if (userData===null)
        {
            route.replace('/');
        }
    }, [route, userData])

    if (userData===undefined || userData===null)
        {
            return null
        }

  return children
}

export default Authentication