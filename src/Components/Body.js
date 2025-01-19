import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../CartContext';
import './Body.css';
import Popup from './Popup';

const prod_api = "http://localhost:8080/products";

const Body = () => {
    const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [cartQuantities, setCartQuantities] = useState({});
    const [popupMessage, setPopupMessage] = useState(null);
    const [popupType, setPopupType] = useState("success"); // Default to success popup type
    const [popupProduct, setPopupProduct] = useState(null); // Track the product that triggered the popup

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(prod_api);
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleQuantityChange = (productId, value) => {
        const product = products.find((p) => p.id === productId);
        if (product) {
            const maxQuantity = product.quantity;
            const alreadyInCart = cartQuantities[productId] || 0;
            const parsedValue = Math.max(1, Number(value)); // Ensure quantity is at least 1

            // Prevent exceeding max available inventory
            if (parsedValue > maxQuantity - alreadyInCart) {
                setPopupMessage(`Only ${maxQuantity - alreadyInCart} of ${product.name} available.`);
                setPopupType("error"); // Set the popup type to error
                setPopupProduct(product); // Set the product that triggered the popup
                setTimeout(() => setPopupMessage(null), 1500);
                return;
            }

            setQuantities((prev) => ({ ...prev, [productId]: parsedValue }));
        }
    };

    const handleAddToCart = (product) => {
        const quantityToAdd = quantities[product.id] || 1; // Default to 1 if no quantity is set
        const alreadyInCart = cartQuantities[product.id] || 0;
        const maxQuantity = product.quantity;
        const remainingQuantity = maxQuantity - alreadyInCart;

        if (remainingQuantity === 0) {
            setPopupMessage(`No ${product.name} available in inventory`);
            setPopupType("error"); // Set the popup type to error
            setPopupProduct(product); // Set the product that triggered the popup
            setTimeout(() => setPopupMessage(null), 1500);
            return;
        }

        

        if (quantityToAdd > remainingQuantity) {
            setPopupMessage(
                `Cannot add ${quantityToAdd} ${product.name}(s). Only ${remainingQuantity} more available.`
            );
            setPopupType("error"); // Set the popup type to error
            setPopupProduct(product); // Set the product that triggered the popup
        } else {
            const productWithQuantity = { ...product, quantity: quantityToAdd };
            addToCart(productWithQuantity);

            setCartQuantities((prev) => ({
                ...prev,
                [product.id]: alreadyInCart + quantityToAdd,
            }));

            setPopupMessage(`${product.name} (x${quantityToAdd}) added to cart successfully`);
            setPopupType("success"); // Set the popup type to success
            setPopupProduct(product); // Set the product that triggered the popup
        }

        setTimeout(() => setPopupMessage(null), 1500);
    };

    return (
        <>
            <h1 className="body-title">Clothing Store</h1>
            <div className="product-grid">
                {products.map((product) => {
                    const alreadyInCart = cartQuantities[product.id] || 0;
                    const maxQuantity = product.quantity;
                    const remainingQuantity = maxQuantity - alreadyInCart;

                    return (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <h3 className="product-title">{product.name}</h3>
                                <p className="product-price">₹{product.price}</p>
                                <div className="quantity-selector">
                                    <label htmlFor={`quantity-${product.id}`}>Quantity: </label>
                                    <input
                                        type="number"
                                        id={`quantity-${product.id}`}
                                        min="1"
                                        max={remainingQuantity}
                                        value={quantities[product.id] || 1} // Default to 1
                                        onChange={(e) =>
                                            handleQuantityChange(product.id, e.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="add-to-cart-btn"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            {popupMessage && popupProduct && (
                <Popup
                    message={popupMessage}
                    onClose={() => setPopupMessage(null)}
                    type={popupType}
                    product={popupProduct} // Pass the product for styling or position purposes
                />
            )}
        </>
    );
};

export default Body;
