import './App.css';
import NavMenu from './components/NavMenu';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Servicios from './components/Servicios';
import Tecnologias from './components/Tecnologias';
import { Nosotros } from './components/Nosotros';






function App() {
  return (
    <div className="noesis-landing">
      <NavMenu />
      <section className="hero" id="inicio">
        <div className="hero-content">
          <h1>NOESIS</h1>
          <span className="slogan">Pensando en arte, codificando en alma</span>
          <p className="hero-desc">
            En NOESIS creamos soluciones de software personalizadas para impulsar tu negocio. Nuestro equipo combina creatividad, experiencia y pasión por la tecnología para transformar ideas en productos digitales de alto impacto.
          </p>
          <button className="btn-principal" onClick={() => window.location.hash = '#contacto'}>Contáctenos</button>
        </div>
      </section>
      <section className="tecnologias" id="tecnologias">
        <Tecnologias />
      </section>
      <Nosotros />
      <section className="servicios" id="servicios">
        <Servicios />
      </section>
  
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
