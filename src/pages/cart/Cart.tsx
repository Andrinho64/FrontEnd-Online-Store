import React, { useEffect, useState } from 'react';
import './style.css';
import mockItensCart from '../../__mocks__/mockReq03';
import { Itens } from './types';
import CardCart from '../../components/CartCard';

function Cart() {
  const [itensCart, setItensCart] = useState<Itens[]>([]);
  useEffect(() => {
    setItensCart(mockItensCart);
  }, []);
  console.log(itensCart);
  return (
    <div>
      {itensCart.map((itemCart, i) => {
        return (<CardCart key={ i } itemCart={ itemCart } />);
      })}
      <div id="buttons">
        <button
          type="button"
          // value={ item.id }
          data-testid="product-decrease-quantity"
          // onClick={ this.handleSubItem }
        >
          -
        </button>
        <button
          type="button"
          // value={ item.id }
          data-testid="product-increase-quantity"
          // onClick={ this.handleAddItem }
        >
          +
        </button>
        <button
          type="button"
          data-testid="remove-product"
          // value={ item.id }
          // onClick={ this.handleRemoveItem }
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Cart;