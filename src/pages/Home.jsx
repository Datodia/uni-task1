import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='p-8 flex flex-col gap-4' >
        <Link to={'/add'} className='bg-cyan-500 p-4 text-white font-bold'>
            Add Product
        </Link>
        <Link to={'/list'} className='bg-cyan-500 p-4 text-white font-bold'>
            Show Product List
        </Link>
    </div>
  )
}
