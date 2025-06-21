import logo from '../assets/noesis-logo.svg';
import { useState, useEffect } from 'react';
import '../styles/NavMenu.css'; 
//Import from assets with astro
import logo from '../assets/Noesis.svg'; 
export default function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleNavClick = () => setMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
<<<<<<< HEAD
                <img alt="Logo Noesis" src={logo} className="logo-nav" />
=======
                <img src={logo} alt="Logo Noesis" className="logo-nav" />
>>>>>>> 0ce8c6d317608626dfa4987c23d01628c89c3bd8
                <button
                  className={`menu-hamburguesa${menuOpen ? ' open' : ''}`}
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Abrir menú"
                >
                  <span className="menu-bar"></span>
                  <span className="menu-bar"></span>
                  <span className="menu-bar"></span>
                </button>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {menuOpen && (
                      <li className="logo-mobile">
                        <img alt="Logo Noesis" src={logo} style={{ width: '48px', marginBottom: '1em' }} />
                      </li>
                    )}
                    <li><a href="#inicio" onClick={handleNavClick}>Inicio</a></li>
                    <li><a href="#nosotros" onClick={handleNavClick}>Nosotros</a></li>
                    <li><a href="#ventajas" onClick={handleNavClick}> Digitalizate</a></li>
                    <li className="contacto-li"><a href="#contacto" className="contacto-btn" onClick={handleNavClick}>Contáctenos</a></li>
                </ul>
                <a href="#contacto" className="contacto-btn desktop-only">Contáctenos</a>
            </div>
            {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>}
        </nav>
    )
}