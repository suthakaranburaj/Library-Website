import React from 'react'
import { Link } from 'react-router-dom'
export default function Journals() {
  return (
    <div>
        <Link to='/journals'></Link>
        <section className="min-h-screen flex flex-col justify-center font-serif w-full">
    <div className="flex flex-col h-full w-full">
        <header className="text-center mb-4 h-24">
            <h1 className="text-4xl mt-10 font-bold mb-8 border-b-4 border-orange-400 pb-2 h-14">Journals</h1>
        </header>

        <div className="space-y-12 w-full">
        
            <div className="flex flex-wrap justify-between w-full">
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">1. Computer Engineering and IT</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Intl. journal of embedded systems & computer engineering
                    </p>
                    <div className="container p-5 bg-yellow-100 rounded-lg shadow-lg ml-4">
                        <p>1) Journal of advanced database management & systems</p>
                        <p>2) Journal of advance research in computer engineering</p>
                        <p>3) Journal of advances in shell programming</p>
                        <p>4) Journal of analysis and computation</p>
                        <p>5) Journal of artificial intelligence research and advances</p>
                        <p>6) Journal of intelligent computing and application</p>
                        <p>7) Journal of neural computing systems</p>
                        <p>8) Journal of web engineering and technology</p>
                        <p>9) Recent trends in parallel computing</p>
                        <p>10) Recent trends in programming languages</p>
                        <p>11) CSI communications</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">2. Information Technology</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Intl. journal of information and communication technologies
                    </p>
                    <div className="container p-5 bg-yellow-100 rounded-lg shadow-lg ml-4">
                        <p>1) Indian journal of multimedia</p>
                        <p>2) Intl. journal of information retrieval</p>
                        <p>3) Intl. journal of intelligent information processing</p>
                        <p>4) Intl. journal of IT and database systems</p>
                        <p>5) Journal of information technology and engineering</p>
                    </div>
                </div>
            </div>

    
            <div className="flex justify-between w-full">
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">3. EXTC Engineering</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Electronics & Telecommunication Engineering
                        <div className="container p-5 bg-yellow-100 rounded-lg shadow-lg ml-4">
                            <p>(1) Journal of communication engineering and systems</p>
                            <p>(2) IETE journal of research*</p>
                            <p>(3) IETE technical review</p>
                            <p>(4) IETE journal of education</p>
                            <p>(5) Advances in wireless and mobile communication</p>
                            <p>(6) Global journal of electronic communication research</p>
                            <p>(7) Indian journal of advances in communication engineering</p>
                            <p>(8) Indian journal of electrical engineering and computer engineering</p>
                            <p>(9) Indian journal of electronic research and engineering</p>
                            <p>(10) Indian journal of electronics and telecommunication engineering</p>
                            <p>(11) Intl. journal of control theory and application*</p>
                            <p>(12) Intl. journal of wireless communication and simulation</p>
                            <p>(13) Electronics for you (M)</p>
                            <p>(14) Electronics Bazaar (M)</p>
                        </div>
                    </p>
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">4. Mechanical Engineering</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Mechanical Engineering
                        <div className="container p-3 bg-yellow-100 rounded-lg shadow-lg ml-4">
                            <p>(1) Intl. journal of material science*</p>
                            <p>(2) Journal of vibration engineering and technology</p>
                            <p>(3) Indian journal of heat and mass transfer</p>
                            <p>(4) Indian journal of robotics and applications</p>
                            <p>(5) Journal of advancements in robotics</p>
                            <p>(6) Intl. journal of mechanical & production engg. & research and development</p>
                            <p>(7) Intl. journal of fluid mechanics</p>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

</div>
  )
}
