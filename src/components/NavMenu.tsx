import logo from '../assets/logo-removebg-preview.png';
import {useState} from 'react';
export default function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Cerrar menú al navegar
    const handleNavClick = () => setMenuOpen(false);

    return (
        <nav className="main-nav fixed">
            <div className="nav-content">
                <img src={logo} alt="Logo Noesis" className="logo-nav" />
                <button className="menu-hamburguesa" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
                    <span className="menu-bar"></span>
                    <span className="menu-bar"></span>
                    <span className="menu-bar"></span>
                </button>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#inicio" onClick={handleNavClick}>Inicio</a></li>
                    <li><a href="#clientes" onClick={handleNavClick}>Nuestros clientes</a></li>
                    <li><a href="#servicios" onClick={handleNavClick}>Servicios</a></li>
                    <li><a href="#proyectos" onClick={handleNavClick}>Proyectos</a></li>
                    <li><a href="#contacto" onClick={handleNavClick}>Contáctenos</a></li>
                </ul>
            </div>
        </nav>
    )
}