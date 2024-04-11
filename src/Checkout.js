import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
  const [{cart, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout_left'>
          <img className='checkout_ad' 
          src=''
          alt=''
          />


          <div>
          <h3>
            Namaste, {user?.email}
          </h3>
            <h2 className='checkout_title'>
              Your shopping Cart
            </h2>

            
            { cart.map(item =>(
                <CheckoutProduct 
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
            ))}

            {/* Checkout Product*/}
            {/* Checkout Product*/}
            {/* Checkout Product*/}
            {/* Checkout Product*/}
            {/* Checkout Product*/}

          </div>     
        </div>


        <div className='checkout_right'>
          <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
