import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const navigate = useNavigate();
    const { cart } = useContext(CartContext);

    // Calculate total items in the cart
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const handleCartClick = () => {
        navigate('/cartOverview'); // Navigate to Cart Overview
    };

    const handleHomeClick = () => {
        navigate('/'); // Navigate to Home Page
    };

    return (
        <header className="header">
            <h1 style={{ color: 'white', cursor: 'pointer' }} onClick={handleHomeClick}>
                Welcome to Schmick Store
            </h1>
            <button onClick={handleCartClick} className="cart-button">
                <FaShoppingCart size={24} style={{ marginRight: '8px' }} />
                Cart {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </button>
        </header>
    );
};

export default Header;
