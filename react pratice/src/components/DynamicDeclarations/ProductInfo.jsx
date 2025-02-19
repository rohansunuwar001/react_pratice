import React from 'react'

const ProductInfo = () => {
    const product = {
        name:"Laptop",
        price:1200,
        availability:"In Stock"
    }
  return (
    <div>
        <p>Product Name : {product.name} </p>
        <p>Product price : ${product.price} </p>
        <p>Product availability : {product.availability} </p>
    </div>
  )
}

export default ProductInfo