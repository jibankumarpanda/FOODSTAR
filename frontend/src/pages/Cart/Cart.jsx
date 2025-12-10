import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreProvider';
import './Cart.css';

const Cart = () => {
    const { cartItems, food_list } = useContext(StoreContext);
    
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
                <hr />
                {food_list && food_list.length > 0 ? (
                    food_list.map((item) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div key={item._id} className='cart-item-title cart-items-item'>
                                    <p>{item.name}</p>
                                </div>
                            );
                        }
                        return null;
                    })
                ) : (
                    <div className="cart-items-empty">
                        <p>Your cart is empty</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;