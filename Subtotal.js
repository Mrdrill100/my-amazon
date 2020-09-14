import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format"
import {getBasketTotal} from "./reducer";
import { useStateValue } from './StateProvider';
import { useHistory } from "react-router-dom";




function Subtotal() {
    const history = useHistory();
    const [{ basket}, dispatch] = useStateValue();
    return (
    <div className="Subtotal">
    <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            
            Subtotal ({basket.length} items): <strong>{value}</strong>
          </p>
          <small className="Subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)} 
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
    <button> Proceed to checkout</button>
   </div>
    );
}

export default Subtotal
