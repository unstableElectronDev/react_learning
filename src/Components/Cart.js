// src/Cart.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import './Cart.css'; // Optional: Create and style as needed

const CartOverview = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="cart-overview">
                <h2>Your cart is empty!</h2>
                <Link to="/">Go Back to Store</Link>
            </div>
        );
    }

    return (
        <div className="cart-overview">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-info">
                            <h3>{item.name}</h3>
                            <p>Price: ₹{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <Link to={`/cart/${item.id}`} className="view-details-link">
                                View Details
                            </Link>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="remove-from-cart-btn"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/" className="continue-shopping-link">
                Continue Shopping
            </Link>
        </div>
    );
};

export default CartOverview;
