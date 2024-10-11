import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        {/* <img src={assets.logo} alt="" className='mb-5 w-32'/> */}
        <p className='text-3xl font-medium mb-4'>TravelThreads.</p>
        <p className='w-full md:2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad ut vel voluptas eaque cupiditate blanditiis, deserunt porro nisi debitis reiciendis, consequatur nam velit odit nemo quia perspiciatis assumenda? Doloremque.</p>
      </div>

    <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
    </div>

    <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91 8788551575</li>
            <li>vgyemmewar@gmail.com</li>
        </ul>
    </div>
    </div>
    <div>
        <hr/>
        <p className='py-5 text-sm  text-center'>Copyright 2024 @TravelThreads. All right reserved.</p>
    </div>
    </div>
  )
}

export default Footer
