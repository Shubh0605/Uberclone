import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { use } from 'react'
const UserProctectedWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [ token])

    

  return (
    <>
        {children}
    </>
  )
}

export default UserProctectedWrapper