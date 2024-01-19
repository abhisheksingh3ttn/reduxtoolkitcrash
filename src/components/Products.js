import React, { useEffect } from 'react';
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../store/productSlice';

const Products = () => {
    const {data:products, status} = useSelector((state) => state.product);
    const dispatch = useDispatch();
   // eslint-disable-next-line 
    useEffect(()=> {
        dispatch(fetchProducts());
    },[]);
    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if(status === STATUSES.LOADING){
        return <h2>Loading....</h2>
    }
  return (
    <div className='productsWrapper'>
        {
        products.map(product => (
            <div className='card' key={product.id}>
                <img src={product.image} alt='' />
                <h4>{product.title}</h4>
                <h4>{product.price}</h4>
                <button className='btn' onClick={() => handleAdd(product)}>Add to Cart</button>
            </div>
        ))
        }
    </div>
  )
}

export default Products