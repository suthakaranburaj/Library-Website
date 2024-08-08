import React from 'react'
import { Link } from 'react-router-dom'
export default function Services() {
  return (
    <div>
        <Link to='/services'>
        </Link>
        <p className='mb-5 text-red-500 h-16 text-centre m-auto font-bold text-5xl py-1 border-y-4 bg-yellow-200 text-center'>Library Services</p>
        <div className="Flex m-8" >
          <div>
            <h2>Liberary provides the following Services:</h2>
              <ul>
                <li><a href="">Membership</a></li>
                <li><a href="">Book Search &#40;OPAC&#41;	</a></li>
                <li><a href="">Book issue&#47;renew&#47;reserve</a></li>
                <li><a href="">Internet facility</a></li>
                <li><a href="">Photocopy facility</a></li>
                <li><a href="">Book Bank Scheme &#40;SC&#47;ST&#47;NT&#47;OBC&#41;</a></li>
              </ul>
          </div>
          <div>

          </div>
        </div>
      
    </div>
  )
}