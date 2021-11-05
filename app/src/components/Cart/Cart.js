import React from 'react'
import {cart} from '../../data/cart';
import { Link } from 'react-router-dom';
import '../../css/hybrid.css'
import { slideInAnimation } from '../Global/func';

const Cart = (props) => {
    React.useEffect(()=>{
        cart.size > 0?slideInAnimation('#cartpage'):slideInAnimation('#cartpage-empty')
    })
    console.log(`Cart size: ${cart.sizeOf()}`);
    if (cart.size > 0) {
        return (
        <main id='cartpage' className='webpage-hidden'>
            <h1 className='cartpage-heading'>Your Shopping Cart</h1>
        </main>
        )
    } else {
        return (
            <main id='cartpage-empty' className='webpage-hidden'>
                <img src="../icons/bucket.png" alt="empty-cart" className="empty-cart" />
                Your Cart is Empty.
                <Link className='cartpage-continue-shopping' to='/home'>Continue Shopping</Link>
            </main>
        )
    }
}

export default Cart
