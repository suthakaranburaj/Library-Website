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
      <div className='flex justify-center items-center my-10'>
        <div>
        <FontAwesomeIcon className='text-orange-500 size-16 rounded-full  hover:bg-orange-100 active:text-orange-300' icon="fa-solid fa-chevron-left" />
        </div>
        <img className='w-8/12'
        src={Library_office_photo} alt="" />
        <div className=''>
             <FontAwesomeIcon className='text-orange-500 size-16 rounded-full  hover:bg-orange-100 active:text-orange-300' icon="fa-solid fa-chevron-right" />
        </div>
        <div className='texts-center w-3/6 text-4xl'>
            {/* <p className='text-7xl text-[#014da1] font-serif mb-20 text-center'>Useful Links</p> */}
            <div className='grid grid-cols-1 gap-4 w-5/6 my-10 text-3xl font-serif'>

                <div className='flex justify-around items-center bg-yellow-200  rounded-2xl cursor-pointer h-16 text-center px-2'>

                    <p className=''>Library Books</p>
                    <FontAwesomeIcon className='size-8 text-red-500 active:text-red-300  ' icon="fa-solid fa-magnifying-glass" />

                </div>
                
                <div className='flex justify-around items-center bg-yellow-200  rounded-2xl cursor-pointer h-16 text-center '>

                    <p className=''>Question Bank</p>
                    {/* <FontAwesomeIcon className='size-8 text-red-500 active:text-red-300 ' icon="fa-solid fa-file" /> */}

                </div>

                <div className='flex justify-around items-center bg-yellow-200  rounded-2xl cursor-pointer h-16 text-center '>

                    <p className=''>Library Brochure</p>
                    <FontAwesomeIcon className='size-8 text-red-500 active:text-red-300 ' icon="fa-solid fa-file" />

                </div>
                <div className='flex justify-around items-center bg-yellow-200  rounded-2xl cursor-pointer h-16 text-center '>

                    <p className=''>University Syllabus</p>
                    {/* <FontAwesomeIcon className='size-8 text-red-500 active:text-red-300 ' icon="fa-solid fa-file" /> */}

                </div>
                <div className='flex justify-around items-center bg-yellow-200  rounded-2xl cursor-pointer h-16 text-center '>

                    <p className=''>Scholarships</p>
                    <FontAwesomeIcon className='size-8 text-red-500 active:text-red-300 ' icon="fa-solid fa-magnifying-glass" />

                </div>
                <div className='flex justify-around items-center bg-yellow-200  rounded-2xl cursor-pointer h-16 text-center '>

                    <p className=''>Research Funds</p> 
                    <FontAwesomeIcon className='size-8 text-red-500 active:text-red-300 ' icon="fa-solid fa-magnifying-glass" />

                </div>
            </div>

            </div>


            
      </div>

      {/*Principl section*/}
      <div className='h-6/6 mb-10'>
        <div className='flex justify-center h-1/2 '>
            <p className='text-7xl w-9/12 text-center h-44 flex mb-10 items-center justify-center py-10 text-[#014da1] font-serif'>Principal's Message</p>
        </div>
        <div className='flex'>
            <div className='h-4/6 w-5/12 '>
                <img className='ml-28 bg-black rounded-3xl ' src={principal_mam_photo} alt="" />
            </div>
            <div className='w-7/12 text-2xl items-center flex-col pr-10 pt-10'>
                <p>Dear Library Users,Welcome to the GST Central Library
                This website is designed to acquaint you with the GST library information, services, activities and links to other internet sites to assist you in your academic and research needs
                Please feel free to contribute your input about library services and this website.  We value your comments and believe that your feedback will directly impact the library’s level of success.
                </p>
                <p className='pt-10'>Principal Dr Laksmi Sudha</p>
                
            </div>
        </div>
      </div>
      {/*news letter useful links */}
      <div className='ml-20 mt-20 mb-10 flex'>
            <div className='w-6/12'>
                <p className='text-7xl text-[#014da1] font-serif mb-20'>News & Update</p>
                <p className='text-2xl'>Students Belonging to SC/ST/OBC category may  contact the library for Book bank books facility</p>
                <br />
                <p className='text-2xl'>Download the Book Bank form <a href="#" className='text-red-600'>here</a></p>

                {/*new arrivals 
                We can add this feature in our admin panel , like sir can update the newly arrived books*/}

                <div className='mt-10 flex-col text-2xl'>
                    <p className='text-red-500 font-bold text-4xl mb-5 bg-yellow-200 text-center h-16 flex items-center justify-center rounded-xl w-5/6'>
                        New Books Available!!!</p>
                    <ul className='list-disc ml-5'>
                        <li>Book 1</li>
                        <li>Book 2</li>
                        <li>Book 3</li>
                        <li>All new Books of 2024</li>
                    </ul>
                </div>


            </div>

            <div className='w-6/12 text-center ml-3 text-2xl'>
                <p className='text-7xl text-[#014da1] font-serif mb-20 px-10'>Useful Links</p>
                <div className='flex'>
                    <div className='grid grid-cols-1 gap-2 underline text-start'>
                        <p className='text-blue-600 active:text-blue-400 cursor-pointer'>E-Books Subscription</p>
                        <p className='text-blue-600 active:text-blue-400 cursor-pointer'>E-Journals</p>
                        <p className='text-blue-600 active:text-blue-400 cursor-pointer'>E-Newspapers</p>
                        <p className='text-blue-600 active:text-blue-400 cursor-pointer'>Swayam</p>
                        <p className='text-blue-600 active:text-blue-400 cursor-pointer'>ePathshala</p>
                        <p className='text-blue-600 active:text-blue-400 cursor-pointer'>NPTEL</p>
                        <p className='text-blue-600 active:text-blue-400 cursor-pointer'>eGyanKosh</p>
                        <p className='text-blue-600 active:text-blue-400 cursor-pointer'>National Academic Repository</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
       
    </div>
  )
}

