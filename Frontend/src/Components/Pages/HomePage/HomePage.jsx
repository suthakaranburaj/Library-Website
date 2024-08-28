import React from 'react'
import principal_mam_photo from './assets/principal_mam.png'
import Library_office_photo from './assets/library_office_photo.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
library.add(fas);

export default function HomePage() {
  return (
    //image section
    <div className=''>
        <Link to='/'></Link>
        
    <div className='flex items-center justify-center mb-10 mt-28'>
        
        <div>
        <FontAwesomeIcon className='text-orange-500 rounded-full size-16 hover:bg-orange-100 active:text-orange-300' icon="fa-solid fa-chevron-left" />
        </div>
        <img className='w-8/12'
        src={Library_office_photo} alt="" />
        <div className=''>
             <FontAwesomeIcon className='text-orange-500 rounded-full size-16 hover:bg-orange-100 active:text-orange-300' icon="fa-solid fa-chevron-right" />
        </div>
        <div className='w-3/6 text-4xl texts-center'>
            {/* <p className='text-7xl text-[#014da1] font-serif mb-20 text-center'>Useful Links</p> */}
            <div className='grid w-5/6 grid-cols-1 gap-4 my-10 font-serif text-3xl'>

                <div className='flex items-center justify-around h-16 px-2 text-center bg-yellow-200 cursor-pointer rounded-2xl'>

                    <p className=''>Library Books</p>
                    <FontAwesomeIcon className='text-red-500 size-8 active:text-red-300 ' icon="fa-solid fa-magnifying-glass" />

                </div>
                
                <div className='flex items-center justify-around h-16 text-center bg-yellow-200 cursor-pointer rounded-2xl '>

                    <p className=''>Question Bank</p>
                    {/* <FontAwesomeIcon className='text-red-500 size-8 active:text-red-300 ' icon="fa-solid fa-file" /> */}

                </div>

                <div className='flex items-center justify-around h-16 text-center bg-yellow-200 cursor-pointer rounded-2xl '>

                    <p className=''>Library Brochure</p>
                    <FontAwesomeIcon className='text-red-500 size-8 active:text-red-300 ' icon="fa-solid fa-file" />

                </div>
                <div className='flex items-center justify-around h-16 text-center bg-yellow-200 cursor-pointer rounded-2xl '>

                    <p className=''>University Syllabus</p>
                    {/* <FontAwesomeIcon className='text-red-500 size-8 active:text-red-300 ' icon="fa-solid fa-file" /> */}

                </div>
                <div className='flex items-center justify-around h-16 text-center bg-yellow-200 cursor-pointer rounded-2xl '>

                    <p className=''>Scholarships</p>
                    <FontAwesomeIcon className='text-red-500 size-8 active:text-red-300 ' icon="fa-solid fa-magnifying-glass" />

                </div>
                <div className='flex items-center justify-around h-16 text-center bg-yellow-200 cursor-pointer rounded-2xl '>

                    <p className=''>Research Funds</p> 
                    <FontAwesomeIcon className='text-red-500 size-8 active:text-red-300 ' icon="fa-solid fa-magnifying-glass" />

                </div>
            </div>

            </div>


            
      </div>

      {/*Principl section*/}
      <div className='mb-10 h-6/6'>
        <div className='flex justify-center h-1/2 '>
            <p className='text-7xl w-9/12 text-center h-44 flex mb-10 items-center justify-center py-10 text-[#014da1] font-serif'>Principal's Message</p>
        </div>
        <div className='flex'>
            <div className='w-5/12 h-4/6 '>
                <img className='bg-black ml-28 rounded-3xl ' src={principal_mam_photo} alt="" />
            </div>
            <div className='flex-col items-center w-7/12 pt-10 pr-10 text-2xl'>
                <p>Dear Library Users,Welcome to the GST Central Library
                This website is designed to acquaint you with the GST library information, services, activities and links to other internet sites to assist you in your academic and research needs
                Please feel free to contribute your input about library services and this website.  We value your comments and believe that your feedback will directly impact the library’s level of success.
                </p>
                <p className='pt-10'>Principal Dr Laksmi Sudha</p>
                
            </div>
        </div>
      </div>
      {/*news letter useful links */}
      <div className='flex mt-20 mb-10 ml-20'>
            <div className='w-6/12'>
                <p className='text-7xl text-[#014da1] font-serif mb-20'>News & Update</p>
                <p className='text-2xl'>Students Belonging to SC/ST/OBC category may  contact the library for Book bank books facility</p>
                <br />
                <p className='text-2xl'>Download the Book Bank form <a href="#" className='text-red-600'>here</a></p>

                {/*new arrivals 
                We can add this feature in our admin panel , like sir can update the newly arrived books*/}

                <div className='flex-col mt-10 text-2xl'>
                    <p className='flex items-center justify-center w-5/6 h-16 mb-5 text-4xl font-bold text-center text-red-500 bg-yellow-200 rounded-xl'>
                        New Books Available!!!</p>
                    <ul className='ml-5 list-disc'>
                        <li>Book 1</li>
                        <li>Book 2</li>
                        <li>Book 3</li>
                        <li>All new Books of 2024</li>
                    </ul>
                </div>


            </div>

            <div className='w-6/12 ml-3 text-2xl text-center'>
                <p className='text-7xl text-[#014da1] font-serif mb-20 px-10'>Useful Links</p>
                <div className='flex'>
                    <div className='grid grid-cols-1 gap-2 underline text-start'>
                        <p className='text-blue-600 cursor-pointer active:text-blue-400'>E-Books Subscription</p>
                        <p className='text-blue-600 cursor-pointer active:text-blue-400'>E-Journals</p>
                        <p className='text-blue-600 cursor-pointer active:text-blue-400'>E-Newspapers</p>
                        <p className='text-blue-600 cursor-pointer active:text-blue-400'>Swayam</p>
                        <p className='text-blue-600 cursor-pointer active:text-blue-400'>ePathshala</p>
                        <p className='text-blue-600 cursor-pointer active:text-blue-400'>NPTEL</p>
                        <p className='text-blue-600 cursor-pointer active:text-blue-400'>eGyanKosh</p>
                        <p className='text-blue-600 cursor-pointer active:text-blue-400'>National Academic Repository</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
       
    </div>
  )
}

