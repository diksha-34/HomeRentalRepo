import React from 'react'
import Home from '../Components/Home/Home'
import {Footer}  from '../Components/Footer/Footer'

import { Route, Routes } from 'react-router-dom'
import HomeDetails from '../Components/Home/HomeDetails'
import About from '../Components/OtherPages/About'
import Services from '../Components/OtherPages/Services'
import Contact from '../Components/OtherPages/Contact'
import PaymentSuccess from '../Components/Payment/PaymentSuccess'

const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Home/>}></Route>
        <Route path='/register' element={<Home/>}></Route>
        <Route path='/homedetails/:houseId' element={<HomeDetails/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/payment/:houseId/:userId' element={<PaymentSuccess/>}></Route>
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default UserRouter
