import React from 'react';
import '../styles/Clientes.css';
import logoMetalFusion from '../assets/clientes/Logo.jpg';

const Clientes: React.FC = () => {
  const clientes = [
    { 
      nombre: '', 
      icono: <img src={logoMetalFusion} alt="MetalFusion" />,
      url: 'https://metal-fusion-gt.com/' // Cambia esta URL por la real
    }
    //agregar mas clientes aquí
  ];

  

  return (
    <section id="clientes" className="clientes-section">
      <div className="clientes-container">
        <h2 className="clientes-titulo">Nuestros Clientes</h2>
        <div className="clientes-logos">
          {clientes.map((cliente, index) => (
            <a 
              key={index} 
              href={cliente.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cliente-logo"
            >
              {cliente.icono && <span className="cliente-icono">{cliente.icono}</span>}
              <span className="cliente-nombre">{cliente.nombre}</span>
            </a>
          ))}
        </div>
        <div className="separador"></div>
      </div>
    </section>
  );
};

export default Clientes; 