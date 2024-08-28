import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'

function App() {
  

  return (
    <UserContextProvider>
     <h1>Mini Context</h1>
     <Login />
    </UserContextProvider>
  )
}

export default App
