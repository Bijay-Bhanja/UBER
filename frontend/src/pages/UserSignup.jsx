import React, { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'


const UserSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const {user,setUser}=React.useContext(UserDataContext)

  const navigate = useNavigate();

  const submitHandler =async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      }, email: email, password: password
    }

    const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser) 
    
    if(response.status === 201){
      const data=response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-base font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-6'>
            <input required type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm' placeholder='First name' />
            <input required type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm' placeholder='Last name' />
          </div>
          <h3 className='text-base mb-2 font-medium'>What's your email</h3>
          <input required type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm' placeholder='email@example.com' />
          <h3 className='text-base mb-2 font-medium'>Enter Password</h3>
          <input required type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm' placeholder='password' />
          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create account</button>
          <p className='text-center'>Already have a account?<Link to="/user-login" className="text-blue-600">Login here</Link></p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>

    </div>
  )
}

export default UserSignup