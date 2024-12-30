import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserLogout from './pages/UserLogout'
import Home from './pages/Home'
import CaptainHome from './pages/CaptainHome'
import UserContext from './context/UserContext';
import UserProctectedWrapper from './pages/UserProctectedWrapper'

const App = () => {
  return (
    <UserContext>
      <div>
        <Routes>
          <Route path='/' element={<Start/>}/>
          <Route path='/login' element={<UserLogin/>}/>
          <Route path='/signup' element={<UserSignup/>}/>
          <Route path='/captain-login' element={<CaptainLogin/>}/>
          <Route path='/captain-signup' element={<CaptainSignup/>}/>
          <Route path='/home' element={
            <UserProctectedWrapper>
              <Home />
            </UserProctectedWrapper>
          }/>

          <Route path='/user/logout' element={<UserProctectedWrapper>
            <UserLogout />
          </UserProctectedWrapper>
          }/>
          <Route path='/captain-home' element={<CaptainHome/>}/>
        </Routes>
      </div>
    </UserContext>
  )
}

export default App