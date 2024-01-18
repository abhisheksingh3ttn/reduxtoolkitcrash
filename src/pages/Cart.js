import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice'

const Cart = () => {
    const cartProducts = useSelector( (state) => state.cart);
    const dispatch = useDispatch();
    const handleRemove = (product) => dispatch(remove(product));
  return (
    <div>
        <h3>Cart</h3>
        <div className='cartWrapper'>
            {
                cartProducts.map((item) => (
                    <div className='cartCard' key={item.id}>
                        <img src={item.image} alt='' />
                        <h5>{item.title}</h5>
                        <button className='btn' onClick={()=> handleRemove(item.id)}>Remove</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cart