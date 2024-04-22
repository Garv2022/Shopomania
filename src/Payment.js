import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom';
import {CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';

function Payment() {
  const [{cart, user}, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setsucceeded] = useState(false);
  const [processing, setprocessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() =>{
    //generate special stripe secret which allows us to change customer
    const getClientSecret = async () =>{
        const response = await axios 
    }
    getClientSecret();
  }, [cart])
  const handleSubmit = async (e) =>{
      //do all stripe things
      e.preventDefault();
      setprocessing(true);

      //const payload = await stripe
  }

  const handleChange = e =>{
      //listen for chnages in the cardelement
      // and display anmy errors as the customer types their card details
      setDisabled(e.empty);
      setError(e.error ? e.error.message: "");
  }

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
               

               <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange}/>
                  <div className='payment_priceComtainer'>
                  <CurrencyFormat 
                    renderText={(value) =>(              
                            <h3>
                                Subtotal: {value}
                            </h3>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={'₹'}
                  />
                  <button disabled={processing || disabled || 
                  succeeded}></button>
                      <span>{processing ? <p>Processing</p>:
                      "Buy Now"}</span>
                  </div>

                  {error && <div>{error}</div>}
               </form>
            </div>


        </div>       
      </div>
    </div>
  )
}

export default Payment
