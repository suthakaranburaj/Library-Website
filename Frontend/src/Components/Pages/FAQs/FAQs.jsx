import React from 'react'
import { Link } from 'react-router-dom'
export default function FAQs() {
  return (
    <div className='font-serif'>  
        <Link to='/faqs'>
        </Link>
        <header className="text-center mb-4">
                <h1 className="text-3xl font-bold mb-4 border-b-4 border-orange-400 pb-2 text-gray-900">FAQs</h1>
            </header>
        <div className='flex mx-10'>
          
          <div className='mr-5'>
              <h1 className='text-2xl'>How can I become the member of GST Library?</h1>
              <p>Students, Faculty and staff of GST are bona-fide members and no other formality is required. As soon as you get your ID Card, please visit the library to activate your membership.</p>
          </div>
          <div className='ml-5'>
              <h1 className='text-2xl'>How can I become the member of GST Library?</h1>
              <p>Students, Faculty and staff of GST are bona-fide members and no other formality is required. As soon as you get your ID Card, please visit the library to activate your membership.</p>
         
          </div>
        </div>
      
    </div>
  )
}