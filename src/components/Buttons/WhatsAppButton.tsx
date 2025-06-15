import React from 'react';
import '../../styles/WhatsAppButton.css';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton; 