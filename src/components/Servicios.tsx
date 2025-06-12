import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Servicios() { 
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <>
      <h3>Nuestros servicios</h3>
      <ul className="servicios-lista">
        <li data-aos="fade-up">Desarrollo web a medida</li>
        <li data-aos="fade-up">Aplicaciones móviles</li>
        <li data-aos="fade-up">Consultoría tecnológica</li>
        <li data-aos="fade-up">Integraciones y automatización</li>
      </ul>
    </>
  );
}