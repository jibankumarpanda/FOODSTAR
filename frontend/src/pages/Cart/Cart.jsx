import React, { useContext, useState, useMemo } from 'react';
import { StoreContext } from '../../Context/StoreProvider';
import { assets } from '../../assets/assets';
import './Cart.css';

const Cart = () => {
    const { cartItems, food_list, addToCart, removeFromCart, setCartItems } = useContext(StoreContext);
    const [promoCode, setPromoCode] = useState('');
    const [appliedPromo, setAppliedPromo] = useState(null);
    
    // Available promo codes
    const promoList = [
        { code: 'WELCOME10', discount: 10, type: 'percentage' },
        { code: 'FOODIE20', discount: 20, type: 'percentage' },
        { code: 'FREESHIP', discount: 5, type: 'fixed' },
    ];

    // Calculate subtotal using useMemo to prevent unnecessary recalculations
    const subtotal = useMemo(() => {
        return food_list.reduce((total, item) => {
            return total + (item.price * (cartItems[item._id] || 0));
        }, 0);
    }, [food_list, cartItems]);

    // Calculate discount using useMemo
    const { discount, total } = useMemo(() => {
        let discount = 0;
        let total = subtotal;

        if (appliedPromo) {
            if (appliedPromo.type === 'percentage') {
                discount = subtotal * (appliedPromo.discount / 100);
            } else {
                discount = Math.min(appliedPromo.discount, subtotal);
            }
            total = subtotal - discount;
        }

        return { discount, total };
    }, [subtotal, appliedPromo]);

    const handleApplyPromo = () => {
        const promo = promoList.find(p => p.code === promoCode);
        if (promo) {
            setAppliedPromo(promo);
        } else {
            alert('Invalid promo code');
        }
    };
    
    const handleRemovePromo = () => {
        setAppliedPromo(null);
        setPromoCode('');
    };

    // Rest of your component...
    
    return (
        <div className='cart'>
            <h1 className='cart-title'>Your Shopping Cart</h1>
            <div className='cart-container'>
                <div className="cart-items">
                    <div className="cart-items-header">
                        <h2>Items in Cart</h2>
                        <span className='item-count'>{Object.values(cartItems).reduce((a, b) => a + b, 0)} items</span>
                    </div>
                    <div className="cart-items-list">
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
                </div>
                
                {food_list && food_list.some(item => cartItems[item._id] > 0) && (
                    <div className="cart-sidebar">
                        <div className="cart-summary">
                            <h3>Order Summary</h3>
                            
                            {/* Promo Code Section */}
                            <div className="promo-section">
                                <h4>Promo Code</h4>
                                {appliedPromo ? (
                                    <div className="promo-applied">
                                        <span>Applied: {appliedPromo.code} ({appliedPromo.discount}% off)</span>
                                        <button onClick={handleRemovePromo} className="remove-promo">Remove</button>
                                    </div>
                                ) : (
                                    <div className="promo-input">
                                        <input 
                                            type="text" 
                                            placeholder="Enter promo code" 
                                            value={promoCode}
                                            onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                                        />
                                        <button onClick={handleApplyPromo} className="apply-promo">Apply</button>
                                    </div>
                                )}
                                <div className="available-promos">
                                    <p>Available Promos:</p>
                                    <ul>
                                        {promoList.map((promo, index) => (
                                            <li key={index}>
                                                <strong>{promo.code}</strong>: {promo.discount}% off {promo.type === 'fixed' ? 'fixed amount' : ''}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                           {/* Order Summary */}
<div className="summary-details">
    <div className="summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
    </div>
    
    {discount > 0 && (
        <div className="summary-row discount-row">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
        </div>
    )}
    
    <div className="summary-row">
        <span>Shipping</span>
        <span>Free</span>
    </div>
    
    <div className="summary-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
    </div>
</div>
                            
                            <button className="checkout-btn">Proceed to Secure Checkout</button>
                            
                            <div className="payment-methods">
                                <p>We accept:</p>
                                <div className="payment-icons">
                                    <i className="fab fa-cc-visa"></i>
                                    <i className="fab fa-cc-mastercard"></i>
                                    <i className="fab fa-cc-paypal"></i>
                                    <i className="fab fa-cc-apple-pay"></i>
                                </div>
                            </div>
                            
                            <div className="secure-checkout">
                                <i className="fas fa-lock"></i>
                                <span>Secure Checkout</span>
                            </div>
                        </div>
                        
                        <div className="cart-support">
                            <h4>Need Help?</h4>
                            <p>Our customer service is available 24/7</p>
                            <a href="tel:+91 9330693750">
                                <i className="fas fa-phone"></i> +91 933069784
                            </a>
                            <a href="mailto:support@jiban.com">
                                <i className="fas fa-envelope"></i> support@foodstar.com
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;