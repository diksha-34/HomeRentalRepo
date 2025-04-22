import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Admin/Components/Admin'
import { Footer } from '../Components/Footer/Footer' // Import Footer component correctly
import UserDetails from '../Admin/Components/UserDetails'
import Dashboard from '../Admin/Components/Dashboard'

const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Admin/>}></Route>
        <Route path='/userdetails' element={<UserDetails/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default AdminRouter
