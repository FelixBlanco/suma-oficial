import './global.css'
import React, { ReactFragment } from 'react'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
// import { NavigationEJ } from './components/NavigationEJ'
import { Navigation } from './components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <>
      <html lang='en'>
        <head />
        <body>
          <Navigation />
          {children}
        </body>
      </html>
    </>
  )
}
