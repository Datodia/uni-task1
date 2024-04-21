import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductStore'
import Navbar from '../components/Navbar'

export default function AddProduct() {
    const {setProduct} = useContext(ProductContext)
    const [id, setId] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        description: ""
    })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!formData.name.trim() || !formData.description.trim()){
            setError('Product Fields are required')
            return
        }
        const newProduct = {
            id,
            ...formData
        }
        setId(prev => prev + 1)
        setError('')
        setProduct((prev) =>[newProduct, ...prev])
        setFormData({name: "", description: ""})
    }
  return (
    <div className='p-8'>
        <Navbar />
        <form onSubmit={handleSubmit} className='p-4 rounded-lg border-2 border-black flex flex-col gap-4 mt-4'>
            <input 
                value={formData.name}
                onChange={handleChange}
                name="name"
                type="text" 
                placeholder='Product Name' 
                className='border-2 border-black h-10 rounded-md'    
            />
            <input 
                value={formData.description}
                name='description'
                onChange={handleChange}
                placeholder='Product Description' 
                className='border-2 border-black h-10 rounded-md'     
            />
            {error ? <p className='text-red-600'>{error}</p> : null}
            <button 
                className='p-3 bg-cyan-700 text-white font-bold'
            >
                Add Product
            </button>
        </form>
    </div>
  )
}
