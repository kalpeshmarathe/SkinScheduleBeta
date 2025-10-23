// src/components/CartSidebar.jsx
import React from 'react';
import { useCart } from './CartContext';
import '@/assets/css/CartSidebar.css'; // We will create this file

export default function CartSidebar() {
    // Get all the cart data and functions
    const { isCartOpen, toggle, cartItems, removeItemFromCart, count } = useCart();

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <>
            {/* The overlay */}
            <div 
                className={`cart-overlay ${isCartOpen ? 'open' : ''}`} 
                onClick={toggle} 
            />
            {/* The sidebar */}
            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h3>Your Cart ({count})</h3>
                    <button className="cart-close-btn" onClick={toggle}>&times;</button>
                </div>

                <div className="cart-body">
                    {cartItems.length === 0 ? (
                        <p className="cart-empty">Your cart is empty.</p>
                    ) : (
                        cartItems.map(item => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.imageUrl} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <p className="cart-item-name">{item.name}</p>
                                    <p className="cart-item-price">
                                        {item.quantity} x ${item.price}
                                    </p>
                                </div>
                                <button 
                                    className="cart-item-remove"
                                    onClick={() => removeItemFromCart(item.id)}
                                >
                                    &times;
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Subtotal:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="cart-checkout-btn">Proceed to Checkout</button>
                    </div>
                )}
            </div>
        </>
    );
}