import ArrowIcon from "../icons/ArrowIcon";
import TextHumanSVG from "../icons/TextHumanSVG";
import '../styles/Contacto.css'; // Asegúrate de tener este archivo CSS con los estilos necesarios
export default function Contacto(){
    return(
        <section className="contacto" id="contacto">
          <div className="contacto-info">
            <div className="contacto-info-text">
              <h3>¿Tienes preguntas?</h3>
            <p>¿Tienes alguna pregunta o necesitas más <span>información</span>? ¡Estamos aquí para ayudarte!</p>
            <p>Completa el formulario y nos pondremos en <span>contacto</span> contigo lo antes posible.</p>
            <p>También puedes escribirnos a <a href="mailto:neosis.startup@gmail.com">nuestro correo</a></p>
            </div>
            <TextHumanSVG className="contacto-info-svg" />
          </div>
          
        <form className="form-contacto" onSubmit={e => e.preventDefault()}>
          <h3>Contáctanos</h3>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="¿En qué podemos ayudarte?" required />
          <button type="submit"><ArrowIcon className="arrow-icon"/>Enviar</button>
        </form>
      </section>
    )
}