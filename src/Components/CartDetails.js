// src/CartDetails.js
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import './CartDetails.css'; // Optional: Create and style as needed

const CartDetails = () => {
    const { id } = useParams(); // Get the dynamic ID from the route
    const { cart, removeFromCart } = useContext(CartContext);

    // Find the product in the cart by ID
    const product = cart.find(item => item.id === parseInt(id));

    if (!product) {
        return (
            <div className="cart-details">
                <h2>Product not found in the cart!</h2>
                <Link to="/">Go Back to Store</Link>
            </div>
        );
    }

    return (
        <div className="cart-details">
            <h1 style={{ color: 'Black' }}>Welcome to Cart Store</h1>
            <div className="product-detail">
                <img src={product.image} alt={product.name} className="product-detail-image" />
                <div className="product-detail-info">
                    <h2>{product.name}</h2>
                    <p>Price: ₹{product.price}</p>
                    <p>Product ID: {product.id}</p>
                    <p>Quantity: {product.quantity}</p>
                    <button
                        onClick={() => removeFromCart(product.id)}
                        className="remove-from-cart-btn"
                    >
                        Remove from Cart
                    </button>
                </div>
            </div>
            <Link to="/cart" className="view-all-cart-link">
                View All Cart Items
            </Link>
        </div>
    );
};

export default CartDetails;
