import React from 'react'
import './Product.css'

type ProductProps = {
    image: string
    title: string
    price: number
}

const Product = ({ image, title, price }: ProductProps) => {
    return (
        <div className='product'>
            <div><img src={image} alt="product" /></div>
            <div className="product-title">{title}</div>
            <div className="product-control d-f jc-sb">
                <div className="product-price">{price}$</div>
                 <button className='product-controls-btn'>Add to cart</button>   
            </div>
        </div>
    )
}

export default Product