import React from 'react'
import { Link } from 'react-router-dom'
export default function Journals() {
  return (
    <div>
        <Link to='/journals'></Link>
        <section class="min-h-screen flex flex-col justify-center font-serif px-8 lg:px-32">
    <div class="flex flex-col h-full">
        <header class="text-center mb-8">
            <h1 class="text-4xl font-bold mb-6 border-b-4 border-orange-500 pb-4 text-gray-900">Journals</h1>
        </header>
        
        <div class="space-y-12">
        
            <div>
                <h2 class="text-3xl font-semibold text-gray-800 mb-4">1. Computer Engineering and IT</h2>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Computer Engineering and IT focus on the study of computers, their design, and their application in various fields. It covers a wide range of topics from programming to hardware engineering, providing students with a strong foundation in technology and problem-solving.
                </p>
            </div>
            
         
            <div>
                <h2 class="text-3xl font-semibold text-gray-800 mb-4">2. EXTC Engineering</h2>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Electronics and Telecommunication Engineering (EXTC) involves the study of electronic devices, circuits, communication equipment, and related technologies. This branch emphasizes the design and development of systems for communication and information processing.
                </p>
            </div>
            
            <div>
                <h2 class="text-3xl font-semibold text-gray-800 mb-4">3. Mechanical Engineering</h2>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Mechanical Engineering is one of the oldest and broadest engineering disciplines. It deals with the design, analysis, manufacturing, and maintenance of mechanical systems. The field requires a deep understanding of core concepts including mechanics, kinematics, thermodynamics, and materials science.
                </p>
            </div>
        </div>
    </div>
</section>
 
    </div>
  )
}