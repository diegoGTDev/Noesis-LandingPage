export default function Footer(){
    return (
        <footer>
        <div className="social-buttons">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-button">
            <i className="fab fa-facebook"></i>
          </a> */}
          <a href="https://www.instagram.com/noesis.team/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="social-button">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:contacto@noesis.com" className="social-button">
            <i className="fas fa-envelope"></i>
          </a>
          {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-button">
            <i className="fab fa-linkedin"></i>
          </a> */}
          {/* <a href="https://wa.me/50246677427" target="_blank" rel="noopener noreferrer" className="social-button">
            <i className="fab fa-whatsapp"></i>
          </a> */}
          <a href="https://wa.me/50233574461" target="_blank" rel="noopener noreferrer" className="social-button">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <small>© {new Date().getFullYear()} NOESIS. Todos los derechos reservados.</small>
      </footer>
    )
}