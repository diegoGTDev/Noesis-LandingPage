import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Ventajas.css'
const ventajas = [
    {
      titulo: "Automatización de procesos",
      descripcion: "Digitaliza tareas repetitivas como facturación, inventarios o atención al cliente. Esto reduce el margen de error humano y libera tiempo para enfocarte en lo estratégico.",
      imagen: "/images/automatizacion.webp"
    },
    {
      titulo: "Acceso desde cualquier lugar",
      descripcion: "Consulta datos, gestiona operaciones y monitorea el negocio en tiempo real desde cualquier dispositivo con internet, estés donde estés, las 24 horas del día.",
      imagen: "/images/Acceso.jpeg"
    },
    {
      titulo: "Mejor toma de decisiones",
      descripcion: "Accede a reportes automáticos, gráficas y estadísticas en tiempo real para tomar decisiones más rápidas, acertadas y con base en datos.",
      imagen: "/images/Decisiones.webp"
    },
    {
      titulo: "Ahorro en costos operativos",
      descripcion: "Al digitalizar procesos se reduce el uso de papel, almacenamiento físico y horas-hombre, optimizando así los recursos del negocio.",
      imagen: "/images/Ahorro.webp"
    },
    {
      titulo: "Mayor control y seguimiento",
      descripcion: "Lleva un control exacto de cada venta, producto, cliente y empleado. Puedes auditar cambios, generar informes y detectar fallos en segundos.",
      imagen: "/images/Control.webp"
    },
    {
      titulo: "Mejora en la atención al cliente",
      descripcion: "Con herramientas digitales como chats automatizados, formularios o apps, los clientes reciben respuestas rápidas y soporte constante.",
      imagen: "/images/Cliente.webp"
    },
    {
      titulo: "Seguridad de la información",
      descripcion: "Tus datos estarán respaldados en servidores seguros con acceso limitado, evitando pérdidas o accesos no autorizados.",
      imagen: "/images/seguridad.webp"
    },
    {
      titulo: "Escalabilidad del negocio",
      descripcion: "Al tener procesos digitales, es más fácil expandirse, integrar nuevas herramientas o adaptarse a cambios en el mercado sin empezar de cero.",
      imagen: "/images/escalabilidad.webp"
    }
  ]
  

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
          className={`ventaja-item${i % 2 !== 0 ? " reverse" : ""}`}
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