import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function ContactUs() {
  return (
    <div>
        <Link to='/contact'>
        </Link>
        <section className="min-h-screen flex flex-col justify-center font-serif">
        <div classname="flex flex-col h-full">
            <header classname="text-center mb-4">
            <h1 classname="text-4xl font-bold mb-9 border-b-4 border-orange-500 pb-4 h-14 ">Contact Us</h1>

            </header>
            <div classname="flex flex-grow w-full">
                <div classname="flex-1 p-8 bg-white border-r border-gray-200">
                    {/* <!-- Contact Information --> */}
                    <div classname="mb-6 flex items-start gap-5">
                    <FontAwesomeIcon className='text-orange-500 text-2xl' icon="fa-solid fa-location-dot" /> 
                        <div>
                            <h2 classname="text-xl font-semibold mb-2">Our Address</h2>
                            <p>Sies Graduate School of Technology, Nerul EAST, Mumbai, Maharashtra, 440004</p>
                        </div>
                    </div>
                    
                    <div classname="mb-6 flex items-start gap-2">
                    <FontAwesomeIcon className='text-orange-500 text-2xl' icon="fa-solid fa-clock " /> 
                        <i classname="fas fa-clock text-orange-500 text-2xl"></i>
                        <div>
                            <h2 classname="text-xl font-semibold mb-2">Operating Hours</h2>
                            <p>Monday-Friday 9:00 am to 5:00 pm</p>
                            <p>Saturday-Sunday: Closed</p>
                        </div>
                    </div>
                    
                    <div classname="mb-6 flex items-start gap-2">
                    <FontAwesomeIcon className='text-orange-500 text-2xl' icon="fa-solid fa-phone" /> 
                        <i classname="fas fa-phone text-orange-500 text-2xl"></i>
                        <div>
                            <h2 classname="text-xl font-semibold mb-2">Phone Number</h2>
                            <p>9574937689</p>
                        </div>
                    </div>
                    
                    <div classname="mb-6 flex items-start gap-2">
                    <FontAwesomeIcon className='text-orange-500 text-2xl' icon="fa-solid fa-location-dot" /> 
                        <i classname="fas fa-envelope text-orange-500 text-2xl"></i>
                        <div>
                            <h2 classname="text-xl font-semibold mb-2">Email Address</h2>
                            <p>siesgstnerul@college.edu</p>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Contact Form --> */}
                <div classname="flex-1 p-8 bg-white">
                    <h2 classname="text-xl font-semibold mb-4">Get in Touch</h2>
                    <form action="#" method="POST" classname="flex flex-col gap-4">
                        <div>
                            <label for="name" classname="text-sm font-medium text-gray-800">Your Name</label>
                            <input type="text" id="name" name="name" required classname="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"/>
                        </div>
                        <div>
                            <label for="email" classname="text-sm font-medium text-gray-800">Your Email</label>
                            <input type="email" id="email" name="email" required classname="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"/>
                        </div>
                        <div>
                            <label for="message" classname="text-sm font-medium text-gray-800">Message</label>
                            <textarea id="message" name="message" required rows="4" classname="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"></textarea>
                        </div>
                        <button type="submit" classname="p-3 bg-orange-500 text-white rounded-lg text-lg hover:bg-orange-600 focus:outline-none">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
        </section>
   

      
    </div>
  )
}