import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})


    const submithandler = (e) => {
        e.preventDefault()
        setUserData({
            username: {
                FirstName: FirstName,
                LastName: LastName
            },
            email: email,
            password: password,

        })
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }
    return (
        <div className='py-5 px-5 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src="https://pngimg.com/d/uber_PNG24.png" />
                <form onSubmit={(e) => {
                    submithandler(e)
                }}>

                    <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
                    <div className='flex gap-4 mb-6'>
                        <input required
                            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base' type="text" placeholder='Firstname'
                            value={FirstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)

                            }}
                        />
                        <input required
                            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base' type="text" placeholder='Lastname'
                            value={LastName}
                            onChange={(e) => {
                                setLastName(e.target.value)

                            }}
                        />
                    </div>
                    <h3 className='text-lgont-medium mb-2'>What's your Email</h3>
                    <input required
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)

                        }}
                    />
                    <h3 className='text-lg font-medium  mb-2'>Enter Password</h3>
                    <input required


                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)

                        }}
                    />
                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>

                </form>
                <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
            </div>
            <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Services apply</span></p>
            </div>
        </div>
    )
}

export default CaptainSignup