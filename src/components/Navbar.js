import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const product = useSelector((state) =>  state.cart);
    console.log(product);
  return (
    <div style={{'display':'flex','alignItems':'center', 'justifyContent': 'space-between'}}>
        <span className='logo'>REDUX STORE</span>
        <div>
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='/cart'>Cart</Link>
        </div>
        <span className='cartCount'>Cart items: {product.length}</span>
    </div>
  )
}

export default Navbar