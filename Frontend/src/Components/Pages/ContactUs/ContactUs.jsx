import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function ContactUs() {
  return (
    <div>
        <Link to='/contact'></Link>
        <section class="min-h-screen flex flex-col justify-center font-serif">
        <div class="flex flex-col h-full">
            <header class="text-center mb-4">
                <h1 class="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2 text-gray-900">Contact Us</h1>
            </header>
            <div class="flex flex-grow w-full">
                <div class="flex-1 p-8 bg-white border-r border-gray-200">
                    {/* <!-- Contact Information --> */}
                    <div class="mb-6 flex items-start gap-4">
                    <FontAwesomeIcon className='text-blue-500 text-2xl' icon="fa-solid fa-location-dot" /> 
                        <div>
                            <h2 class="text-xl font-semibold mb-2">Our Address</h2>
                            <p>Sies Graduate School of Technology, Nerul EAST, Mumbai, Maharashtra, 440004</p>
                        </div>
                    </div>
                    
                    <div class="mb-6 flex items-start gap-4">
                        <i class="fas fa-clock text-blue-500 text-2xl"></i>
                        <div>
                            <h2 class="text-xl font-semibold mb-2">Operating Hours</h2>
                            <p>Monday-Friday 9:00 am to 5:00 pm</p>
                            <p>Saturday-Sunday: Closed</p>
                        </div>
                    </div>
                    
                    <div class="mb-6 flex items-start gap-4">
                        <i class="fas fa-phone text-blue-500 text-2xl"></i>
                        <div>
                            <h2 class="text-xl font-semibold mb-2">Phone Number</h2>
                            <p>9574937689</p>
                        </div>
                    </div>
                    
                    <div class="mb-6 flex items-start gap-4">
                        <i class="fas fa-envelope text-blue-500 text-2xl"></i>
                        <div>
                            <h2 class="text-xl font-semibold mb-2">Email Address</h2>
                            <p>siesgstnerul@college.edu</p>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Contact Form --> */}
                <div class="flex-1 p-8 bg-white">
                    <h2 class="text-xl font-semibold mb-4">Get in Touch</h2>
                    <form action="#" method="POST" class="flex flex-col gap-4">
                        <div>
                            <label for="name" class="text-sm font-medium text-gray-800">Your Name</label>
                            <input type="text" id="name" name="name" required class="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"/>
                        </div>
                        <div>
                            <label for="email" class="text-sm font-medium text-gray-800">Your Email</label>
                            <input type="email" id="email" name="email" required class="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"/>
                        </div>
                        <div>
                            <label for="message" class="text-sm font-medium text-gray-800">Message</label>
                            <textarea id="message" name="message" required rows="4" class="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"></textarea>
                        </div>
                        <button type="submit" class="p-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 focus:outline-none">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

      
    </div>
  )
}