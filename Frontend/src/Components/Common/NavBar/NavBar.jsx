import React from 'react'
import Sies_logo from './assets/sies_logo.png'
import { Link ,NavLink} from 'react-router-dom'
function NavBar() {
  return (
    <div className='flex items-center justify-between bg-Navbg fixed left-0 right-0 top-0 h-20'>
        <div className='w-2/12 ml-20 '>
            <img className='rounded-2xl p-4 w-36' src={Sies_logo}alt="" />
        </div>
        <div className='w-9/12 h-full'>
            <ul className='flex  font-serif h-full'>
              <li className='p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl h-full hover:bg-gray-300'>
                    <NavLink 
                        to='' 
                        className={({ isActive }) => 
                    `${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'} `
                        }
                    >
                        Home
                    </NavLink>

              </li>
              
              <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl hover:bg-gray-300  relative group'>
                        <NavLink to="/about" className={({ isActive }) =>`${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'}` }>
                            About
                        </NavLink>
                        <div className='hidden group-hover:block absolute bg-[#efefef] w-52 mt-8   -left-11'>
                        <div className='absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#f26d21]'></div>
                            <ul className='bg-gray-300'>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>Library Hours</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>Collection</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>Library Rules</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>Library Committee</li>
                            </ul>

                        </div>
              </li>
              <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl   relative group hover:bg-gray-300'>
                        <NavLink to='/eresources' className={({ isActive }) => `${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'}`} >
                            EResources
                        </NavLink>
                        <div className='hidden group-hover:block absolute bg-[#efefef] w-72 mt-8  -left-16'>
                        <div className='absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#f26d21]'></div>
                            <ul className='bg-gray-300'>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>E-Journals</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>E-Books</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>eShodhSindhu</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>UGC Care Engineering Journals</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>Open Education Resources</li>

                            </ul>

                        </div>
              </li>
              <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl  relative group hover:bg-gray-300'>
                        <NavLink to='/services' className={({ isActive }) => `${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'}`} >
                            Services
                        </NavLink>
                        <div className='hidden group-hover:block absolute bg-[#efefef] w-72 mt-8  -left-20'>
                        <div className='absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#f26d21]'></div>
                            <ul className='bg-gray-300'>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>MemberShip</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>Book issue/lending</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>Book Bank Facility</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>Photocopy Facility</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>Library Book Search</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>Library Research Service</li>

                            </ul>

                        </div>
              </li>
              <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl  hover:bg-gray-300 relative group'>
                        <NavLink to='/journals' className={({ isActive }) => `${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'}`} >
                          Journals
                        </NavLink>
                        <div className='hidden group-hover:block absolute bg-[#efefef] w-72 mt-8  -left-20'>
                        <div className='absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#f26d21]'></div>
                            <ul className='bg-gray-300'>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>CE & IT</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>EXTC</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>ME</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>AIDS</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>AIML</li>
                                <li className='hover:bg-gray-200 py-3 pl-2 border-b-2'>CS & IOT</li>

                            </ul>

                        </div>
              </li> 
              <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl  hover:bg-gray-300 relative group'>
                        <NavLink to='/faqs' className={({ isActive }) => `${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'}`} >
                           FAQs
                        </NavLink>
              </li>

                
                <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl  '>
                  Dspace IR</li>

              <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl  hover:bg-gray-300 relative group'>
                         <NavLink to='/contactus' className={({ isActive }) => `${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'}`} >
                             Contact Us
                        </NavLink>
              </li>

                
            </ul>
        </div>
        
    </div>
  )
}

export default NavBar
