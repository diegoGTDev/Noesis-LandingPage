import './App.css';
import { useState } from 'react';
import NavMenu from './components/NavMenu';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { proyectosIniciales } from './data/proyectos';
import { testimoniosIniciales } from './data/testimonios';
import Servicios from './components/Servicios';
import Clientes from './components/Clientes';






function App() {
  const [proyectos] = useState(proyectosIniciales);
  return (
    <div className="noesis-landing">
      <NavMenu/>
      {/* Hero principal */}
      <section className="hero" id="inicio">
        <div className="hero-content">
          <h1>NOESIS</h1>
          <h2 className="slogan">Pensando en arte, Codificando en alma</h2>
          <p className="hero-desc">
            En NOESIS creamos soluciones de software personalizadas para impulsar tu negocio. Nuestro equipo combina creatividad, experiencia y pasión por la tecnología para transformar ideas en productos digitales de alto impacto.
          </p>
          <button className="btn-principal" onClick={() => window.location.hash = '#contacto'}>Contáctenos</button>
        </div>
        {/* Línea/onda decorativa */}
        <svg className="hero-wave" width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 Q360,0 720,40 Q1080,80 1440,40" stroke="#bbb" strokeWidth="2" fill="none"/>
        </svg>
      </section>
      {/* Logos de clientes - Marquee infinito */}
      <section className="clientes" id="clientes">
        <Clientes/>
      </section>
      {/* Testimonios - Carrusel 3 tarjetas */}
      <section className="testimonios">
        <h3 className="testimonios-titulo">Opinión de nuestros clientes</h3>
        <Testimonios testimonios={testimoniosIniciales} interval={9000} />
          <svg className="hero-wave" width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 Q360,0 720,40 Q1080,80 1440,40" stroke="#bbb" strokeWidth="2" fill="none"/>
        </svg>
      </section>
      {/* Servicios */}
      <section className="servicios" id="servicios">
        <Servicios/>
      </section>
      {/* Proyectos en filas de 3, con imagen, tecnologías y botón */}
      <section className="proyectos" id="proyectos">
      <svg className="hero-wave" width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 Q360,0 720,40 Q1080,80 1440,40" stroke="#bbb" strokeWidth="2" fill="none"/>
        </svg>
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
      {/* Contacto */}
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
