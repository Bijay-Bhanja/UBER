import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userData,setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setUserData({email:email,password:password})
        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
            <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <form action="" onSubmit={(e)=>submitHandler(e)}>
                <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
                <input required type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' placeholder='email@example.com' />
                <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
                <input required type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' placeholder='password' />
                <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
                <p className='text-center'>New here?<Link to="/user-signup" className="text-blue-600">Create new Account</Link></p>
            </form>
            </div>
            <div>
                <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
            </div>

        </div>
    )
}

export default UserLogin