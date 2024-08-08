import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import services from './assets/services-images.png'
export default function Services() {
  return (
    <div className='font-serif'>
        <Link to='/services'>
        </Link>
        <p className='text-4xl font-bold my-10 border-b-4  border-orange-500 pb-4 h-14  text-center'>Library Services</p>
        <div className="Flex m-8 font-serif" >
        <h1 className='text-4xl'>Library provides the following Services:</h1>
          <div className='flex m-8 justify-between '>
            
              <ul className='p-0'>
                <li className='bg-yellow-200 text-3xl flex m-2m justify-between'><p className='m-4'>Membership</p>
                  <a href=""><FontAwesomeIcon className='mx-4'icon="fa-solid fa-chevron-right" /></a>
                  </li>
                <li className='bg-yellow-200 text-3xl flex '><a href="">Book Search &#40;OPAC&#41;<FontAwesomeIcon className='mx-4'icon="fa-solid fa-chevron-right" /></a></li>
                <li className='bg-yellow-200 text-3xl flex '><a href="">Book issue&#47;renew&#47;<FontAwesomeIcon className='mx-4'icon="fa-solid fa-chevron-right" />reserve</a></li>
                <li className='bg-yellow-200 text-3xl flex '><a href="">Internet facility<FontAwesomeIcon className='mx-4'icon="fa-solid fa-chevron-right" /></a></li>
                <li className='bg-yellow-200 text-3xl flex '><a href="">Photocopy facility<FontAwesomeIcon className='mx-4'icon="fa-solid fa-chevron-right" /></a></li>
                <li className='bg-yellow-200 text-3xl flex '><a href="">Book Bank Scheme &#40;SC&#47;ST&#47;NT&#47;OBC&#41;<FontAwesomeIcon className='mx-4'icon="fa-solid fa-chevron-right" /></a></li>
              </ul>
              <img src={services} alt="" className=''/>
          </div>
          <div>

          </div>
        </div>
      
    </div>
  )
}