import React, { createContext, useState } from 'react'

export const ProductContext = createContext(null)

export default function ProductStore({children}) {
    const [product, setProduct] = useState([])
  return (
    <ProductContext.Provider value={{product, setProduct}}>
        {children}
    </ProductContext.Provider>
  )
}
