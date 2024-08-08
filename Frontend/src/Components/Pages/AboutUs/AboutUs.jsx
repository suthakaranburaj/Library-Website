// import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutUs() {
    return (
        <div className='font-serif '>
            <Link to='/about'></Link>
            <section className="min-h-screen flex justify-center font-serif">
                <div className="flex flex-col h-full">
                    <header className="text-center mb-4">
                        <h1 className="text-4xl font-bold mb-8 border-b-4 border-orange-500 py-4 text-gray-900">About Library</h1>
                    </header>

                    {/* Left Side */}
                    <div className="flex flex-grow w-full">
                        <div className="flex-1 p-8 bg-white border-r border-red-200"> 
                            <div className="mb-6 flex items-start gap-2">
                                {/* <FontAwesomeIcon className='text-orange-500 text-2xl' icon="fa-solid fa-envelope" /> */}
                                <div>
                                    <h2 className="text-xl font-semibold mb-2">About Us</h2>
                                    <p>
                                        Library being the heart of an academic and learning center is located in the II floor and is easily accessible
                                        from any part of the SIES GST Campus.<br/>
                                        The aim  of the library is to facilitate the creation of new knowledge through the procurement, processing,
                                        organization &  dissemination of knowledge resources and providing for value added services to users.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Contact Form --> */}
                        <div className="flex-1 p-8 bg-white">
                            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

