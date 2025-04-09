'use client'

import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

function Provider({children}) {
  return (
    <NextThemesProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
    >
            
            {children}
        </NextThemesProvider>
  )
}

export default Provider