import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ventajas = [
  {
    titulo: "Automatización de procesos",
    descripcion: "Reduce errores y ahorra tiempo en tareas repetitivas.",
    imagen: "../public/images/automatizacion.webp"
  },
  {
    titulo: "Acceso desde cualquier lugar",
    descripcion: "Tus datos y herramientas disponibles 24/7 en la nube.",
    imagen: "../public/images/Acceso.jpeg"
  },
  {
    titulo: "Mejor toma de decisiones",
    descripcion: "Datos en tiempo real para decisiones más inteligentes.",
    imagen: "../public/images/Decisiones.webp"
  }
  // Agrega más ventajas si quieres
];

export default function VentajasDeDigitalizar() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <section className="ventajas-digitalizar">
      <h2>Ventajas de Digitalizar tu Negocio</h2>
      <div className="ventajas-lista">
        {ventajas.map((v, i) => (
          <div
            className="ventaja-item"
            key={i}
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <img src={v.imagen} alt={v.titulo} className="ventaja-img" />
            <div className="ventaja-texto">
              <h3>{v.titulo}</h3>
              <p>{v.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}