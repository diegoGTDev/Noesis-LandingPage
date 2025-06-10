export default function Footer(){
    return (
        <footer>
        <div className="social-buttons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-button">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-button">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:contacto@noesis.com" className="social-button">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-button">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <small>© {new Date().getFullYear()} NOESIS. Todos los derechos reservados.</small>
      </footer>
    )
}