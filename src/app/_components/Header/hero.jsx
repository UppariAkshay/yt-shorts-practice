'use client'

import { Button } from '@/components/ui/button'
import React, { useState} from 'react'
import { auth } from '@/app/configs/firebaseConfigs';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { api } from '../../../../convex/_generated/api';
import {useMutation} from 'convex/react'
import { AuthContext } from '@/app/authContext';
import { useContext } from 'react';

function Hero() {
  const {signInClicked, userData} = useContext(AuthContext)

  
  return (
    <div className='text-center'>
        <h1 className='text-7xl'>Ai Youtube Shorts Video Generator</h1>
        <p className='text-gray-500 text-4xl'>Create Your Youtube Shorts Video with one click</p>

        <Button className='bg-red-500 text-white text-2xl h-10 p-8 mr-4'>Explore</Button>
        <Button className='h-10 p-8 text-2xl' onClick={() => signInClicked()}>Sign-In</Button>
    </div>
  )
}

export default Hero