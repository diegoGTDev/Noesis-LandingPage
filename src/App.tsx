import './App.css';
import { useEffect } from 'react';
import NavMenu from './components/NavMenu';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Tecnologias from './components/Tecnologias';
import { Nosotros } from './components/Nosotros';
import VentajasDeDigitalizar from './components/VentajasDeDigitalizar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactButton from './components/Buttons/ContactButton';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);
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
          <ContactButton />
        </div>
      </section>
      <section className="tecnologias" id="tecnologias">
        <Tecnologias />
      </section>
      <Nosotros />
      <VentajasDeDigitalizar />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
