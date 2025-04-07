import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
        <nav className='flex justify-between w-full'>
            <div className='flex flex-row items-center gap-3'>
                <Image src='./logo.svg' height={50} width={50} alt='logo' />
                <p className='text-2xl'>Vide Gen</p>
            </div>
            
            <div>
                <Button className='mr-3'>Dashboard</Button>
                <Button>Sign-in</Button>
            </div>
        </nav>
  )
}

export default Header