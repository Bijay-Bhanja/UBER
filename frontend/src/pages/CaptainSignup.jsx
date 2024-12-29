import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const navigate = useNavigate()

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData={
      fullname: {
        firstname: firstName,
        lastname: lastName,
      }, email: email, password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
if(response.status === 201){
  const data = response.data
  setCaptain(data.captain)
  localStorage.setItem('token',data.token)
  navigate('/captain-home')
}

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-base font-medium mb-2'>What's our Captains name</h3>
          <div className='flex gap-4 mb-6'>
            <input required type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm' placeholder='First name' />
            <input required type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm' placeholder='Last name' />
          </div>
          <h3 className='text-base mb-2 font-medium'>What's our Captains email</h3>
          <input required type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm' placeholder='email@example.com' />
          <h3 className='text-base mb-2 font-medium'>Enter Password</h3>
          <input required type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm' placeholder='password' />
          <h3 className='text-base font-medium mb-2'>Vehicle information</h3>
          <div className='flex flex-col'>
            <div className='flex gap-4 mb-6'>
              <input required type="text" value={vehicleColor} onChange={(e) => { setVehicleColor(e.target.value) }} className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm' placeholder='Vehicle Color' />
              <input required type="text" value={vehiclePlate} onChange={(e) => { setVehiclePlate(e.target.value) }} className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm' placeholder='Vehicle Plate' />
            </div>
            <div className='flex gap-4 mb-6'>
              <input required type="text" value={vehicleCapacity} onChange={(e) => { setVehicleCapacity(e.target.value) }} className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm' placeholder='Vehicle Capacity' />
              <select required className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm' value={vehicleType} onChange={(e)=>{setVehicleType(e.target.value)}}>
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
              </select>
            </div>
          </div>
          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create Captain Account</button>
          <p className='text-center'>Already have a account?<Link to="/Captain-login" className="text-blue-600">Login here</Link></p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>

    </div>
  )
}

export default CaptainSignup