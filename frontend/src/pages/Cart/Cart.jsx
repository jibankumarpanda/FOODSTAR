import React from 'react';
import './Cart.css';
import { assets } from '../../assets/assets';

const Cart = () => {
    // Temporary mock data - remove this once context is set up
    const cartItems = {};
    
    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart_items_title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Actions</p>
                    <p>Remove</p>
                </div>
                <br />
                {Object.keys(cartItems).length > 0 ? (
                    <div>
                        <p>Cart items will be displayed here</p>
                    </div>
                ) : (
                    <div className="cart-items-empty">
                        <p>Your cart is empty</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;