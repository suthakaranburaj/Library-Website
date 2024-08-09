// import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutUs() {
    return (
        <div className='font-serif '>
            <Link to='/about'></Link>
            <section className="min-h-screen flex justify-center font-serif">
                <div className="">
                    <div className=''>
                    <header className="text-center mb-4 h-24">
                        <h1 className="text-4xl mt-10  font-bold mb-8 border-b-4 border-orange-400 pb-2  h-14">About Us</h1>
                    </header>
                    </div>

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
                        
                        {/* <!-- Library timings (regular) --> */}
                        <div className="flex-1 p-8 bg-white">
                            <div className="mb-6 flex items-start gap-2">
                                <div>
                                    <h2 className="text-xl font-semibold mb-2">Library timings (regular)</h2>
                                    <p>
                                        Monday to Saturday: 08 am to 07 pm (11 hrs)<br />
                                        During Vacation:  09 am to 5 pm (8 hrs)<br />
                                        The library will remain closed on Sundays &  Public holidays<br />
                                        Regarding extension of timings, if any, after 7 pm, contact at circulation counter or mail:
                                        <a>librariangst@sies.edu.in</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

