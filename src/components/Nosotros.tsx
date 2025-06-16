
import TeamSVG from '../icons/TeamSVG';
import '../styles/Nosotros.css'; // Asegúrate de tener este archivo CSS con los estilos necesarios
export function Nosotros() {
    return (
        <section id="nosotros" className="nosotros-container">
            <div className="nosotros-content">
                <h3>Nosotros</h3>
                <h2>Ofrecemos un servicio digital único, transformando tus ideas en una <span>realidad</span></h2>
                <p>Ofrecemos servicios de <span>desarrollo web</span>, llevando tu negocio al siguiente nivel con soluciones personalizadas y efectivas.</p>
                <p>En <span>NOESIS</span>, entendemos que cada cliente es único. Por eso, nos enfocamos en crear soluciones a medida que se adapten a tus necesidades específicas.</p>
                <p>Nuestro equipo está compuesto por <span>expertos</span> en diversas tecnologías, lo que nos permite ofrecer un servicio integral y de alta calidad.</p>
            </div>
            <TeamSVG className="nosotros-team-svg" />
        </section>
    )
}
