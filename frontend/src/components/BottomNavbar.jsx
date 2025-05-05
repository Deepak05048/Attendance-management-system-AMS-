import React from 'react';
import logo from "../assets/logo.png";
import { FiLogIn } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";


export default function BottomNavbar() {
  return (
    <div>
        <div className='w-10/12 flex items-center justify-between mx-auto '>

            <div>
                <img src={logo} alt="This is logo"className='h-13 hover:cursor-pointer' />
            </div>
            <div className='flex gap-8 items-center text-purple-400 '>
                <p className='hover:text-purple-500 font-semibold cursor-pointer'>Home</p>
                <p className='hover:text-purple-500 font-semibold cursor-pointer'>Features</p>
                <p className='hover:text-purple-500 font-semibold cursor-pointer'>Testimonial</p>
                <p className='hover:text-purple-500 font-semibold cursor-pointer'>Pricing</p>
                <p className='hover:text-purple-500 font-semibold cursor-pointer'>Contact</p>
                <button className='bg-pink-100 rounded-full px-3 py-1 text-orange-400 font-semibold text-sm hover: duration-500 cursor-pointer'>Try Demo</button>
            </div>
            <div className='flex gap-4 ' >
                <button className='flex items-center gap-2 bg-purple-500 hover:cursor-pointer rounded-md  text-white px-3 py-1'><FiLogIn />Login</button>
                <button className='flex items-center gap-2 bg-white rounded-md border-1 text-purple-500 font-semibold hover:bg-gray-100 duration-500 cursor-pointer px-3 py-1'><FiPhoneCall />Call Now</button>
            </div>

        </div>
    </div>
  )
}
