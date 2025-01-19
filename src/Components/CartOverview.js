import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { CartContext } from '../CartContext';
import './CartOverview.css';

const CartOverview = () => {
    const { cart, removeFromCart, calculateTotalPrice } = useContext(CartContext);
    const navigate = useNavigate(); // Initialize navigation

    const totalPrice = calculateTotalPrice();

    const handleProceedToCheckout = () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Add some items before proceeding.');
            return;
        }
        navigate('/checkout'); // Redirects to the checkout page
    };

    return (
        <div className="cart-overview-container">
            <h1 className="cart-overview-title">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="cart-item-info">
                                <h3 className="cart-item-name">{item.name}</h3>
                                <p className="cart-item-price">Price: ₹{item.price}</p>
                                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                            </div>
                            <button
                                className="remove-item-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="total-price-container">
                        <p>Total Price: ₹{totalPrice}</p>
                    </div>
                    <button
                        className="proceed-to-checkout-btn"
                        onClick={handleProceedToCheckout}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartOverview;
