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
      </section>
    )
}