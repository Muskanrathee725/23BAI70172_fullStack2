import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Dashboard from './pages/dashboard'
import Logs from './pages/Logs'

function App() {
  return (
    <>
      <Header title={"Eco Trap"}/>
      <Dashboard />
      <Logs/>
    </>
  )
}

export default App
