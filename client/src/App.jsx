import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Header from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import PrivateRoute from './components/PrivateRoute'
import TeachersGroup from './pages/TeachersGroup'
import BroadcastPage from './pages/Broadcast'
import AddBroadcastPage from './pages/AddBroadcast'

const App = () => {
  return (
    <div>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teachers-group" element={<TeachersGroup />} />
        <Route path="/broadcast" element={<BroadcastPage />} />
        <Route path='/add-broadcast' element={<AddBroadcastPage />} />
        
        <Route element={<PrivateRoute />} >
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App