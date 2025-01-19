import React from 'react';
import './Popup.css';

const Popup = ({ message, type, product }) => {
    const popupClass = type === "error" ? "popup error" : "popup success"; // Conditionally apply styles

    return (
        <div className={popupClass}>
            <p className='message'>{message}</p>
        </div>
    );
};

export default Popup;
