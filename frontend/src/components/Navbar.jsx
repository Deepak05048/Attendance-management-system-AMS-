import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  return (
   <div className='bg-purple-700 text-white text-sm opacity-90 p-1'>
     <div className='flex justify-between mx-auto w-10/12 '>
      <div className='flex gap-3 hover:cursor-pointer'>
        <p className='flex items-center gap-1'><FaPhoneAlt /> 9769329984</p>
        <p className='flex items-center gap-1'><FaLocationDot /> New Baneshwor, Kathmandu</p>
      </div>
      <div className='flex gap-3 hover:cursor-pointer'>
        <p className='flex items-center gap-1'><IoLogoWhatsapp /> WhatsApp</p>
        <p className='flex items-center gap-1'><MdEmail /> stocknp@gmail.com</p>
      </div>
    </div>
   </div>
  )
}
