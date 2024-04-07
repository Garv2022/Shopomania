import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';


function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
          <img className='checkout_ad' 
          src=''
          alt=''
          />


          <div>
            <h2 className='checkout_title'>
              Your shopping Cart
            </h2>
            {/* Basket Items */}
            {/* Basket Items */}
            {/* Basket Items */}
            {/* Basket Items */}
          </div>     
        </div>


        <div className='checkout_right'>
          <Subtotal />
          <h2>Subtotal</h2>
        </div>
    </div>
  )
}

export default Checkout
