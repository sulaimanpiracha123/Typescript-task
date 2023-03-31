import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userlist from './Screens/usersList'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
function App() {
  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>

      <Userlist/>
      </QueryClientProvider>
   
    </div>
  )
}

export default App
