import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Pages/ShopPage/CartContext';

const Heder = () => {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems)

  return (
    <div className='flex pt-3'>
        <div className='ml-3 '>
            <Link to='/'>Shops</Link>
        </div>
        <div className='ml-3'>
        <Link to='/cart'>Shopping cart ({cartItems.length})</Link>
        </div>
    </div>
  )
}

export default Heder