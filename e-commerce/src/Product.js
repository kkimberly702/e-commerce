import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className='product-info'>
            <section className='brand'>
                NYX PROFESSIONAL MAKEUP
            </section>
            <section className='type'>
                Soft Matte Lip Cream
            </section>
            <section className='price'>
                <strong>$10.99</strong>
            </section>
            <section className='product-rating'>
                <p>	&#x2605;</p>
                <p>	&#x2605;</p>
            </section>
            

        <img src="images/Nyx-lipcream.png" alt='nyx soft matte lip cream' />
        <button>Add to basket</button>
           
        </div>
    
    
    </div>
  )
}

export default Product