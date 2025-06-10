export default function Contacto(){
    return(
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
    )
}