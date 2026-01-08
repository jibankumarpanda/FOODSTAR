import React, { useContext, useState, useMemo } from 'react';
import { StoreContext } from '../../Context/StoreProvider';
import { useNavigate } from 'react-router-dom';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();
    
    const [deliveryData, setDeliveryData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    });
    
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [orderNotes, setOrderNotes] = useState('');
    const [errors, setErrors] = useState({});

    const subtotal = useMemo(() => {
        return food_list.reduce((total, item) => {
            return total + (item.price * (cartItems[item._id] || 0));
        }, 0);
    }, [food_list, cartItems]);

    const deliveryFee = 2.00;
    const total = subtotal + deliveryFee;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDeliveryData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!deliveryData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!deliveryData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!deliveryData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(deliveryData.email)) newErrors.email = 'Email is invalid';
        if (!deliveryData.street.trim()) newErrors.street = 'Street address is required';
        if (!deliveryData.city.trim()) newErrors.city = 'City is required';
        if (!deliveryData.state.trim()) newErrors.state = 'State is required';
        if (!deliveryData.zipcode.trim()) newErrors.zipcode = 'Zipcode is required';
        if (!deliveryData.country.trim()) newErrors.country = 'Country is required';
        if (!deliveryData.phone.trim()) newErrors.phone = 'Phone number is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        // Here you would typically send the order to your backend
        console.log('Order placed:', {
            deliveryData,
            paymentMethod,
            orderNotes,
            cartItems,
            total
        });
        
        // Show success message and redirect
        alert('Order placed successfully! You will be redirected to the home page.');
        navigate('/');
    };

    const hasItemsInCart = food_list && food_list.some(item => cartItems[item._id] > 0);

    if (!hasItemsInCart) {
        return (
            <div className='place-order-empty'>
                <div className='empty-cart-message'>
                    <h2>Your Cart is Empty</h2>
                    <p>You need to add items to your cart before placing an order.</p>
                    <button onClick={() => navigate('/')} className='back-to-menu-btn'>
                        Back to Menu
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='place-order'>
            <h1 className='place-order-title'>Place Your Order</h1>
            <div className='place-order-container'>
                {/* Delivery Information Section */}
                <div className='delivery-section'>
                    <h2>Delivery Information</h2>
                    <form className='delivery-form' onSubmit={handleSubmit}>
                        <div className='form-row'>
                            <div className='form-group'>
                                <label htmlFor='firstName'>First Name *</label>
                                <input
                                    type='text'
                                    id='firstName'
                                    name='firstName'
                                    value={deliveryData.firstName}
                                    onChange={handleInputChange}
                                    className={errors.firstName ? 'error' : ''}
                                />
                                {errors.firstName && <span className='error-message'>{errors.firstName}</span>}
                            </div>
                            <div className='form-group'>
                                <label htmlFor='lastName'>Last Name *</label>
                                <input
                                    type='text'
                                    id='lastName'
                                    name='lastName'
                                    value={deliveryData.lastName}
                                    onChange={handleInputChange}
                                    className={errors.lastName ? 'error' : ''}
                                />
                                {errors.lastName && <span className='error-message'>{errors.lastName}</span>}
                            </div>
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='email'>Email Address *</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={deliveryData.email}
                                onChange={handleInputChange}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className='error-message'>{errors.email}</span>}
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='street'>Street Address *</label>
                            <input
                                type='text'
                                id='street'
                                name='street'
                                value={deliveryData.street}
                                onChange={handleInputChange}
                                className={errors.street ? 'error' : ''}
                            />
                            {errors.street && <span className='error-message'>{errors.street}</span>}
                        </div>
                        
                        <div className='form-row'>
                            <div className='form-group'>
                                <label htmlFor='city'>City *</label>
                                <input
                                    type='text'
                                    id='city'
                                    name='city'
                                    value={deliveryData.city}
                                    onChange={handleInputChange}
                                    className={errors.city ? 'error' : ''}
                                />
                                {errors.city && <span className='error-message'>{errors.city}</span>}
                            </div>
                            <div className='form-group'>
                                <label htmlFor='state'>State *</label>
                                <input
                                    type='text'
                                    id='state'
                                    name='state'
                                    value={deliveryData.state}
                                    onChange={handleInputChange}
                                    className={errors.state ? 'error' : ''}
                                />
                                {errors.state && <span className='error-message'>{errors.state}</span>}
                            </div>
                        </div>
                        
                        <div className='form-row'>
                            <div className='form-group'>
                                <label htmlFor='zipcode'>Zip Code *</label>
                                <input
                                    type='text'
                                    id='zipcode'
                                    name='zipcode'
                                    value={deliveryData.zipcode}
                                    onChange={handleInputChange}
                                    className={errors.zipcode ? 'error' : ''}
                                />
                                {errors.zipcode && <span className='error-message'>{errors.zipcode}</span>}
                            </div>
                            <div className='form-group'>
                                <label htmlFor='country'>Country *</label>
                                <input
                                    type='text'
                                    id='country'
                                    name='country'
                                    value={deliveryData.country}
                                    onChange={handleInputChange}
                                    className={errors.country ? 'error' : ''}
                                />
                                {errors.country && <span className='error-message'>{errors.country}</span>}
                            </div>
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='phone'>Phone Number *</label>
                            <input
                                type='tel'
                                id='phone'
                                name='phone'
                                value={deliveryData.phone}
                                onChange={handleInputChange}
                                className={errors.phone ? 'error' : ''}
                            />
                            {errors.phone && <span className='error-message'>{errors.phone}</span>}
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='orderNotes'>Order Notes (Optional)</label>
                            <textarea
                                id='orderNotes'
                                name='orderNotes'
                                value={orderNotes}
                                onChange={(e) => setOrderNotes(e.target.value)}
                                placeholder='Special instructions for delivery...'
                                rows='3'
                            />
                        </div>
                    </form>
                </div>

                {/* Order Summary Section */}
                <div className='order-summary-section'>
                    <div className='order-summary'>
                        <h2>Order Summary</h2>
                        
                        <div className='cart-items-summary'>
                            {food_list.map((item) => {
                                if (cartItems[item._id] > 0) {
                                    return (
                                        <div key={item._id} className='summary-item'>
                                            <div className='item-info'>
                                                <p>{item.name}</p>
                                                <span className='quantity'>x{cartItems[item._id]}</span>
                                            </div>
                                            <span className='item-price'>${(item.price * cartItems[item._id]).toFixed(2)}</span>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                        
                        <div className='summary-details'>
                            <div className='summary-row'>
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className='summary-row'>
                                <span>Delivery Fee</span>
                                <span>${deliveryFee.toFixed(2)}</span>
                            </div>
                            <div className='summary-total'>
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        
                        {/* Payment Method Selection */}
                        <div className='payment-method'>
                            <h3>Payment Method</h3>
                            <div className='payment-options'>
                                <label className='payment-option'>
                                    <input
                                        type='radio'
                                        name='payment'
                                        value='cod'
                                        checked={paymentMethod === 'cod'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span className='radio-custom'></span>
                                    Cash on Delivery
                                </label>
                                <label className='payment-option'>
                                    <input
                                        type='radio'
                                        name='payment'
                                        value='card'
                                        checked={paymentMethod === 'card'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span className='radio-custom'></span>
                                    Credit/Debit Card
                                </label>
                                <label className='payment-option'>
                                    <input
                                        type='radio'
                                        name='payment'
                                        value='online'
                                        checked={paymentMethod === 'online'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span className='radio-custom'></span>
                                    Online Payment
                                </label>
                            </div>
                        </div>
                        
                        <button type='submit' onClick={handleSubmit} className='place-order-btn'>
                            Place Order • ${total.toFixed(2)}
                        </button>
                        
                        <div className='secure-checkout'>
                            <i className='fas fa-lock'></i>
                            <span>Secure Checkout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
