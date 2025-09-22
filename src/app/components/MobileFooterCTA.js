"use client"
import React from 'react';
import '../MobileFooterCTA.css';
import ButtonPopup from './popupform/ButtonPopup';

const MobileFooterCTA = () => {
    const handleWhatsApp = () => {
        const phoneNumber = '+918802552796';
        const message = 'Hello! I need assistance.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleFreeOpinion = () => {
        alert('Free Opinion feature!');
        // Add your free opinion logic here
    };

    return (
        <div className="simple-footer">
            <button className="btn whatsapp-btn" onClick={handleWhatsApp}>
                WhatsApp
            </button>
            <ButtonPopup className="btn opinion-btn" titile='Free Opinion' />
        </div>
    );
};

export default MobileFooterCTA;