import {useState} from 'react'; 
import '../styles/NavMenu.css'; 

export default function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNavClick = () => setMenuOpen(false);

    return (
        <nav className="main-nav fixed">
            <div className="nav-content">
                <img alt="Logo Noesis" className="logo-nav" />
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
                        <img alt="Logo Noesis" style={{ width: '48px', marginBottom: '1em' }} />
                      </li>
                    )}
                    <li><a href="#inicio" onClick={handleNavClick}>Inicio</a></li>
                    <li><a href="#nosotros" onClick={handleNavClick}>Nosotros</a></li>
                    <li><a href="#ventajas" onClick={handleNavClick}> Digitaliza Tu Negocio</a></li>
                    <li className="contacto-li"><a href="#contacto" className="contacto-btn" onClick={handleNavClick}>Contáctenos</a></li>
                </ul>
                <a href="#contacto" className="contacto-btn desktop-only">Contáctenos</a>
            </div>
            {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>}
        </nav>
    )
}