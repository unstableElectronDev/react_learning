import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './CartCheckout.css';

const Checkout = () => {
    const { cart, calculateTotalPrice } = useContext(CartContext);
    const totalPrice = calculateTotalPrice(); // Get the total price from the context

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <div className="checkout-items">
                {cart.length === 0 ? (
                    <p>Your cart is empty. Add some items before proceeding to checkout.</p>
                ) : (
                    <div>
                        <h2>Your Cart Items</h2>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id} className="checkout-item">
                                    <div className="checkout-item-details">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="checkout-item-image"
                                        />
                                        <div>
                                            <p>{item.name}</p>
                                            <p>Price: ₹{item.price}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>Subtotal: ₹{item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {cart.length > 0 && (
                <div className="checkout-total">
                    <h3>Total Price: ₹{totalPrice}</h3>
                    <button className="confirm-checkout-btn">
                        Confirm Order
                    </button>
                </div>
            )}
        </div>
    );
};

export default Checkout;
