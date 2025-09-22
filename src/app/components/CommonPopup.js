"use client"
import React from 'react';
import './CommonPopup.css';

const CommonPopup = ({ isOpen, onClose, title, message, type = 'success' }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className={`popup-container ${type}`}>
                <div className="popup-header">
                    <h3>{title}</h3>
                    <button className="close-btn-popup" onClick={onClose}>×</button>
                </div>
                <div className="popup-body">
                    <div className={`popup-icon ${type}`}>
                        {type === 'success' ? '✓' : type === 'error' ? '✕' : '!'}
                    </div>
                    <p>{message}</p>
                </div>
                <div className="popup-footer">
                    <button className="popup-ok-btn" onClick={onClose}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommonPopup;