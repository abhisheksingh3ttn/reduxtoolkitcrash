import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        console.log(323232);
        const fetchProducts = async () => {
            const res =  await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
       fetchProducts();
    },[])
  return (
    <div className='productsWrapper'>
        {
        products.map(product => (
            <div className='card' key={product.id}>
                <img src={product.image} />
                <h4>{product.title}</h4>
                <h4>{product.price}</h4>
                <button className='btn'>Add to Cart</button>
            </div>
        ))
        }
    </div>
  )
}

export default Products