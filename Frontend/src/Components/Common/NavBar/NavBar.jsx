import React from 'react'
import Sies_logo from './assets/sies_logo.png'
import { Link ,NavLink} from 'react-router-dom'
function NavBar() {
  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between h-28 bg-Navbg '>
        <div className='w-2/12 ml-40'>
            <img className='p-4 rounded-2xl w-60' src={Sies_logo}alt="" />
        </div>
        <div className='flex-col justify-around w-9/12 h-full mx-40'>        
            
            
                                                    {/* home */}
                                                                                    
            <ul className='flex justify-between font-serif'>
              <li className='pt-10 text-[#014da1] cursor-pointer
                 font-medium text-xl h-full '>
                    <NavLink 
                        to='' 
                        className={({ isActive }) => 
                    `${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'} `
                        }
                    >
                        Home
                    </NavLink>

              </li>
              
                                                    {/* about us */}
                                                                                            
              <li className=' p-6 text-[#014da1] cursor-pointer                   
                 font-medium text-xl  relative group pt-10'>
                        <NavLink to="/about" className={({ isActive }) =>`${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'}` }>
                            About
                        </NavLink>
                        <div className='hidden group-hover:block absolute bg-[#efefef] w-52 mt-8   -left-11'>
                        <div className='absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#f26d21]'></div>
                            <ul className='bg-gray-300'>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>Library Hours</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>Collection</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>Library Rules</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>Library Committee</li>
                            </ul>

                        </div>
              </li>
              
                                                {/* Academics */}
                  
              <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-xl   relative group  pt-10'>
                        <NavLink to='/eresources' className={({ isActive }) => `${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'}`} >
                            Academics
                        </NavLink>
                        <div className='hidden group-hover:block absolute bg-[#efefef] w-72 mt-8  -left-16'>
                        <div className='absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#f26d21]'></div>
                            <ul className='bg-gray-300'>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>E-Journals</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>E-Books</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>eShodhSindhu</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>UGC Care Engineering Journals</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>Open Education Resources</li>

                            </ul>

                        </div>
              </li>
              
                                                        {/* Quick Links */}
                                                                                                            
              <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-xl  relative group pt-10'>
                        <NavLink to='/services' className={({ isActive }) => `${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'}`} >
                            Quick Links
                        </NavLink>
                        <div className='hidden group-hover:block absolute bg-[#efefef] w-72 mt-8  -left-20'>
                        <div className='absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#f26d21]'></div>
                            <ul className='bg-gray-300'>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>MemberShip</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>Book issue/lending</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>Book Bank Facility</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>Photocopy Facility</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>Library Book Search</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>Library Research Service</li>

                            </ul>

                        </div>
              </li>
              <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-xl   relative group pt-10'>
                        <NavLink to='/journals' className={({ isActive }) => `${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'}`} >
                          Others
                        </NavLink>
                        <div className='hidden group-hover:block absolute bg-[#efefef] w-72 mt-8  -left-20'>
                        <div className='absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#f26d21]'></div>
                            <ul className='bg-gray-300'>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>CE & IT</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>EXTC</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>ME</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>AIDS</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>AIML</li>
                                <li className='py-3 pl-2 border-b-2 hover:bg-gray-200'>CS & IOT</li>

                            </ul>

                        </div>
              </li> 
              {/* <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl  hover:bg-gray-300 relative group'>
                        <NavLink to='/faqs' className={({ isActive }) => `${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'}`} >
                           FAQs
                        </NavLink>
              </li> */}

                
                {/* <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl  '>
                  Dspace IR</li> */}

              {/* <li className=' p-6 text-[#014da1] cursor-pointer
                 font-medium text-2xl  hover:bg-gray-300 relative group'>
                         <NavLink to='/contactus' className={({ isActive }) => `${isActive ? 'text-[#f26d21]' : 'text-[#014da1] hover:text-blue-400'}`} >
                             Contact Us
                        </NavLink>
              </li> */}

                
            </ul>
        </div>
        
    </div>
  )
}

export default NavBar
