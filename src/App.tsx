import './App.css';
import logo from './assets/logo-removebg-preview.png';
import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

const testimoniosIniciales = [
  {
    nombre: 'Juan Pérez',
    texto: 'El equipo de NOESIS superó nuestras expectativas. Su atención al detalle y profesionalismo fue excepcional.'
  },
  {
    nombre: 'María Gómez',
    texto: 'Gracias a NOESIS, nuestra empresa ahora cuenta con una plataforma digital robusta y moderna.'
  },
  {
    nombre: 'Carlos Ruiz',
    texto: 'Excelente servicio y acompañamiento en todo el proceso de desarrollo. ¡Muy recomendados!'
  },
  {
    nombre: 'Ana Torres',
    texto: 'NOESIS nos ayudó a digitalizar procesos clave y mejorar la eficiencia de nuestro equipo.'
  },
  {
    nombre: 'Luis Fernández',
    texto: 'Gran calidad humana y técnica. Siempre atentos a nuestras necesidades.'
  }
];

const proyectosIniciales = [
  {
    nombre: 'Plataforma de gestión educativa',
    descripcion: 'Sistema web para administración de colegios y universidades.',
    imagen: 'https://albert-z00z.github.io/Portfolio1/images/NumSecret.png',
    tecnologias: ['React', 'Node.js', 'MongoDB'],
    url: 'https://albert-z00z.github.io/juego-secreto/'
  },
  {
    nombre: 'App de reservas para restaurantes',
    descripcion: 'Aplicación móvil para gestionar reservas y pedidos en restaurantes.',
    imagen: 'https://via.placeholder.com/320x180/cccccc/888888?text=Proyecto+2',
    tecnologias: ['React Native', 'Firebase'],
    url: 'https://ejemplo2.com'
  },
  {
    nombre: 'Integración de sistemas ERP',
    descripcion: 'Solución personalizada para integrar procesos empresariales.',
    imagen: 'https://via.placeholder.com/320x180/cccccc/888888?text=Proyecto+3',
    tecnologias: ['Python', 'Django', 'PostgreSQL'],
    url: 'https://ejemplo3.com'
  },
  // Para agregar más proyectos, seguir el formato de los anteriores
];

const logosGenericos = [
  'https://upload.wikimedia.org/wikipedia/commons/6/69/LEGO_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
];

// Slider de testimonios tipo carrusel 3 tarjetas
function TestimoniosSlider({ testimonios, interval = 8000 }: { testimonios: {nombre: string, texto: string}[], interval?: number }) {
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState('');
  const total = testimonios.length;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = () => {
    setAnim('slide-next');
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
      setAnim('');
    }, 350);
  };
  const prev = () => {
    setAnim('slide-prev');
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + total) % total);
      setAnim('');
    }, 350);
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, interval);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [index, interval, total]);

  const getIdx = (offset: number) => (index + offset + total) % total;
  const visibles = [getIdx(-1), getIdx(0), getIdx(1)];

  return (
    <div className={`testimonios-carrusel ${anim}`}>
      <div className="testimonios-carrusel-inner">
        {visibles.map((idx, pos) => (
          <div
            key={idx}
            className={`testimonio-carrusel ${pos === 1 ? 'central' : 'lateral'}`}
          >
            <div className="testimonio-cuerpo">{`"${testimonios[idx].texto}"`}</div>
            <div className="testimonio-firma">- {testimonios[idx].nombre}</div>
          </div>
        ))}
      </div>
      <div className="testimonios-carrusel-controles">
        <button className="slider-arrow" onClick={prev} aria-label="Anterior">&#8592;</button>
        <button className="slider-arrow" onClick={next} aria-label="Siguiente">&#8594;</button>
      </div>
    </div>
  );
}

function App() {
  // Proyectos dinámicos
  const [proyectos] = useState(proyectosIniciales);

  // Marquee infinito: duplicar logos para que siempre haya flujo
  const marqueeLogos = [...logosGenericos, ...logosGenericos, ...logosGenericos, ...logosGenericos, ...logosGenericos];

  const [menuOpen, setMenuOpen] = useState(false);

  // Cerrar menú al navegar
  const handleNavClick = () => setMenuOpen(false);

  return (
    <div className="noesis-landing">
      {/* Menú fijo */}
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
        <div className="logos-titulo"><em>La gente está hablando</em></div>
        <div className="marquee">
          <div className="marquee-inner slow-marquee">
            {marqueeLogos.map((src, i) => (
              <img src={src} alt={`Logo cliente ${i+1}`} key={i} className="logo-cliente" />
            ))}
          </div>
            <svg className="hero-wave" width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 Q360,0 720,40 Q1080,80 1440,40" stroke="#bbb" strokeWidth="2" fill="none"/>
        </svg>
        </div>
      </section>
      {/* Testimonios - Carrusel 3 tarjetas */}
      <section className="testimonios">
        <h3 className="testimonios-titulo">Opinión de nuestros clientes</h3>
        <TestimoniosSlider testimonios={testimoniosIniciales} interval={9000} />
          <svg className="hero-wave" width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 Q360,0 720,40 Q1080,80 1440,40" stroke="#bbb" strokeWidth="2" fill="none"/>
        </svg>
      </section>
      {/* Servicios */}
      <section className="servicios" id="servicios">
        
        <h3>Nuestros servicios</h3>
        
        <ul className="servicios-lista">
          <li>Desarrollo web a medida</li>
          <li>Aplicaciones móviles</li>
          <li>Consultoría tecnológica</li>
          <li>Integraciones y automatización</li>
        </ul>
        <svg className="servicios-wave" width="100%" height="60" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 Q360,60 720,30 Q1080,0 1440,30" stroke="#bbb" strokeWidth="2" fill="none"/>
        </svg>
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
      <section className="contacto" id="contacto">
        <h3>¿Tienes preguntas? ¡Contáctanos!</h3>
        <form className="form-contacto" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="¿En qué podemos ayudarte?" required />
          <button type="submit">Enviar</button>
        </form>
        <svg className="hero-wave" width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 Q360,0 720,40 Q1080,80 1440,40" stroke="#bbb" strokeWidth="2" fill="none"/>
        </svg>
      </section>
      <footer>
        <div className="social-buttons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-button">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-button">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:contacto@noesis.com" className="social-button">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-button">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <small>© {new Date().getFullYear()} NOESIS. Todos los derechos reservados.</small>
      </footer>
    </div>
  );
}

export default App;
