import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmeRide from '../components/ConfirmeRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitForDriver from '../components/WaitingForDriver'

const Home = () => {
  const [pickUp, setPickUp] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound,setVehicleFound] = useState(false)
  const [waitingForDriver,setWaitingForDriver]=useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef=useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()

  }
  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, { transform: 'translateY(0%)', duration: 0.5 })
    } else {
      gsap.to(vehiclePanelRef.current, { transform: 'translateY(100%)', duration: 0.5 })
    }
  }, [vehiclePanelOpen])

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, { transform: 'translateY(0%)', duration: 0.5 })
    } else {
      gsap.to(confirmRidePanelRef.current, { transform: 'translateY(100%)', duration: 0.5 })
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, { transform: 'translateY(0%)', duration: 0.5 })
    } else {
      gsap.to(vehicleFoundRef.current, { transform: 'translateY(100%)', duration: 0.5 })
    }
  }, [vehicleFound])

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, { transform: 'translateY(0%)', duration: 0.5 })
    } else {
      gsap.to(waitingForDriverRef.current, { transform: 'translateY(100%)', duration: 0.5 })
    }
  }, [waitingForDriver])

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: '70%', padding: 24, duration: 0.5 })
      gsap.to(panelCloseRef.current, { opacity: 1 })
    } else {
      gsap.to(panelRef.current, { height: '0%', padding: 0, duration: 0.5 })
      gsap.to(panelCloseRef.current, { opacity: 0 })
    }
  }, [panelOpen])
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        {/* image for temporary use  */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end absolute h-screen top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => { setPanelOpen(false) }} className='absolute right-6 top-6 text-2xl opacity-0'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => { submitHandler(e) }}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full'></div>
            <input onClick={() => { setPanelOpen(true) }} className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' value={pickUp} onChange={(e) => { setPickUp(e.target.value) }} type="text" placeholder='Add a pick-up' />
            <input onClick={() => { setPanelOpen(true) }} className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' value={destination} onChange={(e) => { setDestination(e.target.value) }} type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanelOpen} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full translate-y-full z-10 bottom-0 bg-white p-3 py-10 px-3 pt-12'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full translate-y-full z-10 bottom-0 bg-white p-3 py-6 px-3 pt-12'>
        <ConfirmeRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full translate-y-full z-10 bottom-0 bg-white p-3 py-6 px-3 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white py-6 px-3 pt-12'>
        <WaitForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  )
}

export default Home