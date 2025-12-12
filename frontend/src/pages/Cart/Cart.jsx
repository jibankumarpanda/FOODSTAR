import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreProvider';
import { assets } from '../../assets/assets';
import './Cart.css';

const Cart = () => {
    const { cartItems, food_list, addToCart, removeFromCart, setCartItems } = useContext(StoreContext);
    
    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart_items_title">
                    <p>Item</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Actions</p>
                </div>
                {food_list && food_list.length > 0 ? (
                    food_list.map((item) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div key={item._id} className='cart-items-item'>
                                    <div className="item-info">
                                        <img src={item.image} alt={item.name} />
                                        <p>{item.name}</p>
                                    </div>
                                    <p>${item.price}</p>
                                    <div className="quantity-display">
                                        <span className="quantity-number">{cartItems[item._id]}</span>
                                    </div>
                                    <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                                    <button 
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item._id)}
                                        aria-label="Remove item"
                                    >
                                        <span>Remove</span>
                                    </button>
                                </div>
                            );
                        }
                        return null;
                    })
                ) : (
                    <div className="cart-items-empty">
                        <h2>Your Cart is Empty</h2>
                        <p>Looks like you haven't added anything to your cart yet.</p>
                    </div>
                )}
            </div>
            
            {food_list && food_list.some(item => cartItems[item._id] > 0) && (
                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${food_list.reduce((total, item) => {
                            return total + (item.price * (cartItems[item._id] || 0));
                        }, 0).toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="summary-row" style={{fontWeight: 'bold', fontSize: '1.1em'}}>
                        <span>Total</span>
                        <span>${food_list.reduce((total, item) => {
                            return total + (item.price * (cartItems[item._id] || 0));
                        }, 0).toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;