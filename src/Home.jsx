import React from 'react'
import { Navigation_baar } from './Components/navigation-bar/Navigation_baar'
import { Footer } from './Components/footer/Footer'
import { SignUp } from './Components/SignUp'
import { Login } from './Components/Login'

export const Home = () => {
  return (
    <div>
        <Navigation_baar />
        <Footer />
    </div>
  )
}
