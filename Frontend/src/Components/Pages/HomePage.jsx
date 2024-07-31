import React from 'react'
import principal_mam_photo from '../assets/principal_mam.png'
import Library_office_photo from '../assets/library_office_photo.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);

function HomePage() {
  return (
    //image section
    <div className=''>
      <div className='flex justify-center items-center my-10'>
        <div>
        <FontAwesomeIcon className='text-orange-500 size-20 rounded-full  hover:bg-orange-100 active:text-orange-300' icon="fa-solid fa-chevron-left" />
        </div>
        <img className='px-10'
        src={Library_office_photo} alt="" />
        <div className=''>
             <FontAwesomeIcon className='text-orange-500 size-20 rounded-full  hover:bg-orange-100 active:text-orange-300' icon="fa-solid fa-chevron-right" />
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
      <div className='ml-28 mt-28 mb-10 flex'>
            <div className='w-5/12'>
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

            <div className='texts-center w-3/6 ml-10 text-4xl'>
            <p className='text-7xl text-[#014da1] font-serif mb-20 text-center'>Useful Links</p>
            <div className='grid grid-cols-1 gap-4 w-5/6 m-10'>
                <p className='text-center bg-yellow-200 pt-2 rounded-2xl cursor-pointer h-16'>Scholarships</p>
                <p className='text-center bg-yellow-200 pt-2 rounded-2xl cursor-pointer h-16'>Research Funds</p>
                <p className='text-center bg-yellow-200 pt-2 rounded-2xl cursor-pointer h-16'>Library Brochure</p>
                <p className='text-center bg-yellow-200 pt-2 rounded-2xl cursor-pointer  h-16'>University Syllabus</p>

            </div>

            </div>
        </div>
    </div>
  )
}

export default HomePage
