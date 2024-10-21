import React from 'react'
import { Link } from 'react-router-dom'


function NoPage() {
  return (
    <div className='text-center mb-5'>
        <h1 className='mt-[10%] text-9xl font-bold text-gray-600'>404</h1>
        <h1 className='text-3xl font-semibold text-gray-600'>Page Not Found</h1>

        <Link to="/"><button className='bg-gray-600 text-white p-4 mt-5 rounded-full'>Back To Home</button></Link>
    </div>
  )
}

export default NoPage