import ArrowIcon from "../icons/ArrowIcon";
import TextHumanSVG from "../icons/TextHumanSVG";
import '../styles/Contacto.css'; // Asegúrate de tener este archivo CSS con los estilos necesarios
import { sendEmail } from "../../netlify/functions/sendEmail";
import { useState } from "react";
export default function Contacto(){

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendEmail(nombre, email, mensaje);
    };

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
          
        <form className="form-contacto" onSubmit={handleSubmit}>
          <h3>Contáctanos</h3>
          <input type="text" aria-busy="true" placeholder="Nombre" required onChange={e => setNombre(e.target.value)} />
          <input type="email" placeholder="Correo electrónico" required onChange={e => setEmail(e.target.value)} />
          <textarea placeholder="¿En qué podemos ayudarte?" required onChange={e => setMensaje(e.target.value)} />
          <button type="submit"><ArrowIcon className="arrow-icon"/>Enviar</button>
        </form>
      </section>
    )
}