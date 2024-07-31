import React from 'react'
import Sies_logo from '../assets/sies_logo.png'
function NavBar() {
  return (
    <div className='flex items-center justify-between bg-Navbg '>
        <div className='w-2/12'>
            <img className='rounded-2xl p-4 w-44' src={Sies_logo}alt="" />
        </div>
        <div className='w-9/12'>
            <ul className='flex  font-serif'>
                <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-xl rounded-xl active:text-blue-300'>
                  Home</li>
                <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-xl rounded-xl active:text-blue-300'>
                  About Us</li>
                <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-xl rounded-xl active:text-blue-300'>
                  E-Resources</li>
                <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-xl rounded-xl active:text-blue-300'>
                  Services</li>
                <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-xl rounded-xl active:text-blue-300'>
                  Journels</li>
                <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-xl rounded-xl active:text-blue-300'>
                  FAQs</li>
                <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-xl rounded-xl active:text-blue-300'>
                  Dspace IR</li>
                <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-xl rounded-xl active:text-blue-300'>
                  Contact us</li>
            </ul>
        </div>
        
    </div>
  )
}

export default NavBar
