import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='border-2 rounded-md border-black p-4 flex gap-4'>
        <Link className='font-bold text-blue-600' to={'/'}>Home</Link>
        <Link className='font-bold text-blue-600' to={'/list'}>List</Link>
        <Link className='font-bold text-blue-600' to={'/add'}>Add</Link>
    </nav>
  )
}
