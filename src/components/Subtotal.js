import React from 'react'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './Reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
function Subtotal() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat

            renderText = {(value) => (
                <>
                <p>
                    SubTotal ({basket.length} items): <strong>{`${value}`}</strong>
                </p>
                <small className="subtotal_gifts">
                    <input type="checkbox"/>This order Contains a gift 
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs"}

            />
            <button>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal
