import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "./StateProvider"
import { getCartTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate(); // useHistory = useNavigate
  const [{cart}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat 
        renderText={(value) =>(
            <>
                <p>
                    Subtotal ({cart.length} items): <strong>{value}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type='checkbox'/>
                </small>
            </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={'₹'}
      />

      <button onClick={() => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
