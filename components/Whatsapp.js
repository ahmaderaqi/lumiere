import React from 'react';
import { Button } from 'react-bootstrap';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const WhatsApp = ({ phoneNumber, message }) => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    const telUrl = `tel:${phoneNumber}`;
    window.open(telUrl);
  };

  const buttonStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <Button variant="success" onClick={handleWhatsAppClick} style={{ ...buttonStyle, marginRight: '8px' }}>
        <FaWhatsapp />
      </Button>
      <Button variant="primary" onClick={handleCallClick} style={buttonStyle}>
        <FaPhone />
      </Button>
    </div>
  );
};

export default WhatsApp;
