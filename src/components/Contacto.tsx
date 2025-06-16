import ArrowIcon from "../icons/ArrowIcon";
import TextHumanSVG from "../icons/TextHumanSVG";
import '../styles/Contacto.css'; // Asegúrate de tener este archivo CSS con los estilos necesarios
import { useState } from "react";
export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje }),
      });
      if (res.ok) {
        setStatus("¡Mensaje enviado correctamente!");
        setNombre("");
        setEmail("");
        setMensaje("");
      } else {
        setStatus("Hubo un error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch {
      setStatus("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    }
  };
  const test = () => setStatus("¡Mensaje enviado correctamente!");
  return (
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
        {status && (
          <div className={`contact-status ${status.includes('error') ? 'error' : 'success'}`}><p>{status.includes('error')? <i className="fa-solid fa-circle-exclamation"></i> : <i className="fa-solid fa-circle-check"></i>} {status}</p></div>
        )}
        <input type="text" aria-busy="true" placeholder="Nombre" required value={nombre} onChange={e => setNombre(e.target.value)} />
        <input type="email" placeholder="Correo electrónico" required value={email} onChange={e => setEmail(e.target.value)} />
        <textarea placeholder="¿En qué podemos ayudarte?" required value={mensaje} onChange={e => setMensaje(e.target.value)} />

        <button type="submit" onClick={test}><ArrowIcon className="arrow-icon" />Enviar</button>
      </form>
    </section>
  )
}