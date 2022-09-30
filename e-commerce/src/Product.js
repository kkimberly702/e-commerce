import React from 'react'
import './Product.css'


function Product({ id, brand, title, price, image, rating }) {
  return (
    <div className='product'>
        <div className='product-info'>
            <section className='brand'>
                {brand}
            </section>
            <section className='type'>
                {title}
            </section>
            <section className='price'>
                <strong>${price}</strong>
            </section>
            <section className='product-rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (<p>⭐</p>))}
            
            </section>
            

        <img src={image} alt='nyx soft matte lip cream' />
        <button>Add to basket</button>
           
        </div>
    
    
    </div>
  )
}

export default Product