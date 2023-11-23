import React from 'react'
import './Shop.css'
import { ProductsList } from '../components/ProductsList/ProductsList'
import Product from '../components/Product/Product'

const Shop = () => {
    return (
        <main>
            <div className="shop-controls d-f jc-sb">
                <button className='shop-controls-filtering'>Filtering</button>
                <form action="" className="shop-controls-fm d-f align-center">
                    <input type="text" name='query' placeholder='Search...' />
                    <button><img src="images/search.png" alt="search" /></button>
                </form>
                <button className='shop-controls-cheep'>Cheep</button>
            </div>
            <div className="shop-catalog d-f jc-sb">
                {
                    ProductsList.map((product) => (
                        <Product
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default Shop