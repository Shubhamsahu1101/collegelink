import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Header from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import Validator from './components/Validator'
import TeachersGroup from './pages/TeachersGroup'
import Broadcasts from './pages/Broadcasts'
import AddBroadcastPage from './pages/AddBroadcast'
import Classroom from './pages/Classroom'
import AllClassrooms from './pages/AllClassrooms'

const App = () => {
  return (
    <div>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teachers-group" element={<TeachersGroup />} />
        <Route path="/broadcast" element={<Broadcasts />} />
        <Route path='/add-broadcast' element={<AddBroadcastPage />} />
        
        <Route element={<Validator />} >
          <Route path='/classroom/:classroomId' element={<Classroom />} />
          <Route path='/all-classrooms' element={<AllClassrooms />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App