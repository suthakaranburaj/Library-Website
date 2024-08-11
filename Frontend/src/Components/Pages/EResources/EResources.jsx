import React from 'react'
import { Link } from 'react-router-dom'
export default function EResources() {
  return (
    <div className='font-serif'>
        <Link to='/eresources'></Link>
            <header className="text-center mb-4 h-14">
                <h1 className="text-4xl mt-10  font-bold mb-8 border-b-4 border-orange-400   h-14">E-Resources</h1>
            </header>
            <div className='flex align-center justify-center h-24 '>
              <p className=' text-4xl m-auto font-bold text-orange-500 size-4/4 '>List of E-resources subscribed by the Library for the year 2022</p>
            </div>
            <div className='grid grid-cols-4 mx-10 gap-8 text-2xl'>

              <div className='bg-yellow-100 p-5 flex flex-col justify-between rounded-xl'>
                  <p className='mb-3'>IEEE-ASPP:</p>
                  <p>The IEEE All Society Periodical Package provides access to IEEE journals, transactions, letters, magazines and conference proceedings, IET journals and conference proceedings, IEEE Standards and IEEE educational courses.  </p>
                  <a className='my-10' href="">Read more</a>
              </div>
              <div className='bg-yellow-100 p-5 flex flex-col justify-between rounded-xl'>
                  <p className='mb-3'>Science Direct:</p>
                  <p>Science Direct is Elsevier’s leading information solution forresearchers. Science Direct combines authoritative, full-text scientific, technical and health publications with smart,intuitive functionality so that users can stay informed in their fields and can work more effectively and efficiently.</p>
                  <a className='my-10' href="">Read more</a>
              </div>
              <div className='bg-yellow-100 p-5 flex flex-col justify-between rounded-xl'>
                  <p className='mb-3'>ASME:</p>
                  <p>THE AMERICAN SOCIETY OF MECHANICAL ENGINEERS promotes the art, science & practice of multidisciplinary engineering and allied sciences around the globe.Founded in 1880 by a small group of leading industrialists, ASME has grown through the decades to include more than 130,000 members in 151 countries. </p>
                  <a className='my-10' href="">Read more</a>
              </div>
              <div className='bg-yellow-100 p-5 flex flex-col justify-between rounded-xl'>
                  <p className='mb-3'>J-Gate Plus:</p>
                  <p>It is an electronic gateway to global e-journal literature. Launched in 2001 by Informatics India Limited. It provides seamless access to  millions of journal articles available online offered by 13,243 Publishers.It presently has a massive database of journal literature, indexed from 48,025 e-journals with links to full text at publisher sites.</p>
                  <a className='my-10' href="">Read more</a>
              </div>

              <div>

              </div>
            </div>
      
    </div>
  )
}