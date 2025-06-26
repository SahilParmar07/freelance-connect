import React from 'react'
import login from './pages/login'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={login}/>
        <Route path="/register" element={Register}/>
      </Routes>
    </Router>
  )
}

export default App
