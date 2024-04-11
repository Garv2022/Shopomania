import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom';

function Payment() {
  const [{cart, user}, dispatch] = useStateValue();


  return (
    <div className='payment'>
      <div className='payemnt_container'>  
        <h1>
          Checkout (<Link to='./checkout'>{cart.length} items</Link>)
        </h1>
        {/* Payment Section : delivery address */ }
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Delivery Address:</h3>
            </div>
            <div className='Payment_address'>
                <p>{user?.email}</p>
                <p>Lane 3, Pragati Vihar</p>
                <p>Dehradun</p>
            </div>
        </div>

        {/* Payment Section : Review Items*/ }
        <div className='payment_section'>
            <div className='payment_title'>
              <h3>Review Items and Delivery</h3>
            </div>
            <div className='payment_items'>
              {cart.map(item =>(
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
              ))}
            </div>
        </div>

        {/* Payment Section : Payment Method */ }     
        <div className='payment_section'>
            <div className='payment_title'>
              <h3>Payment Method</h3>
            </div>
            <div className='payment_details'>
              {/*stripe*/}
               
            </div>


        </div>       
      </div>
    </div>
  )
}

export default Payment
