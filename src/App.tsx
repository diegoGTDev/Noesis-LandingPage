import './App.css';
import { useEffect, useState } from 'react';
import NavMenu from './components/NavMenu';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { proyectosIniciales } from './data/proyectos';
import { testimoniosIniciales } from './data/testimonios';
import Servicios from './components/Servicios';
import Tecnologias from './components/Tecnologias';
import { Nosotros } from './components/Nosotros';
import VentajasDeDigitalizar from './components/VentajasDeDigitalizar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);
  const [proyectos] = useState(proyectosIniciales);
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
      <div data-aos="fade-left"><section className="testimonios">
        <h3 className="testimonios-titulo">Opinión de nuestros clientes</h3>
        <Testimonios testimonios={testimoniosIniciales} interval={9000} />
      </section></div>
      <VentajasDeDigitalizar />
      
      <div data-aos="fade-up"
      data-aos-anchor-placement="center-center"><section className="servicios" id="servicios">
        <Servicios />
      </section></div>
      <div data-aos="zoom-out-down">
      <section className="proyectos" id="proyectos">
        <h3>Algunos de nuestros proyectos</h3>
        <div className="proyectos-lista">
          {proyectos.map((p, i) => (
            <div
              className="proyecto-card"
              key={i}
              tabIndex={0}
              onClick={() => window.open(p.url, '_blank')}
              onKeyDown={e => { if (e.key === 'Enter') window.open(p.url, '_blank'); }}
            >
              <div className="proyecto-img-wrapper">
                <img src={p.imagen} alt={p.nombre} className="proyecto-img" />
              </div>
              <h4 className="proyecto-titulo">{p.nombre}</h4>
              <p className="proyecto-desc">{p.descripcion}</p>
              <div className="proyecto-tecnologias">
                {p.tecnologias.map((tec, idx) => (
                  <span className="proyecto-tec" key={idx}>{tec}</span>
                ))}
              </div>
              <button
                className="proyecto-btn"
                onClick={e => { e.stopPropagation(); window.open(p.url, '_blank'); }}
              >Ver proyecto</button>
            </div>
          ))}
        </div>
      </section>
      </div>

      <div data-aos="fade-up-right">
      <Contacto />
      </div>
      
      
      <Footer />
    </div>
  );
}

export default App;
