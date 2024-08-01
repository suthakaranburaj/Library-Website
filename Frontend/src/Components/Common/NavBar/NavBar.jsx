import React from 'react'
import Sies_logo from './assets/sies_logo.png'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='flex items-center justify-between bg-Navbg '>
        <div className='w-2/12'>
            <img className='rounded-2xl p-4 w-44' src={Sies_logo}alt="" />
        </div>
        <div className='w-9/12'>
            <ul className='flex  font-serif '>
              <Link to=''>
                  <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                      font-medium text-2xl rounded-xl active:text-blue-300'>
                  Home</li>
              </Link>
              <Link to='/about'>
              <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl rounded-xl active:text-blue-300'>
                  About Us</li>
              </Link>  
                
              <Link to='/eresources'>
                <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl rounded-xl active:text-blue-300'>
                  E-Resources
                  </li>
              </Link>

              <Link to='/services'>
                  <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl rounded-xl active:text-blue-300'>
                  Services
                  </li>
              </Link>
              <Link to='journals'>
                  <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl rounded-xl active:text-blue-300'>
                  Journals</li>
              </Link>  
              <Link to='/faqs'>
                <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl rounded-xl active:text-blue-300'>
                  FAQs</li>
              </Link>
                
                <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl rounded-xl active:text-blue-300'>
                  Dspace IR</li>

              <Link to='/contactus'>
                  <li className='hover:bg-gray-200 p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl rounded-xl active:text-blue-300'>
                  Contact us</li>
              </Link>
                
            </ul>
        </div>
        
    </div>
  )
}

export default NavBar
