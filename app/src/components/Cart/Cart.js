import React from 'react'
import {cart} from '../../data/cart';
import '../../css/hybrid.css'

const Cart = (props) => {
    console.log(cart.size);
    if (!cart.isEmpty) {
        return (
        <main id='cartpage'>

        </main>
        )
    } else return (
        <main id='cartpage-empty'>
            <img src="../icons/bucket.png" alt="empty-cart" className="empty-cart" />
            Your Cart is Empty.
        </main>
    )
}

export default Cart
