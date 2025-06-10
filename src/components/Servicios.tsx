export default function Servicios(){
    return (
        <>
        <h3>Nuestros servicios</h3>
        
        <ul className="servicios-lista">
          <li>Desarrollo web a medida</li>
          <li>Aplicaciones móviles</li>
          <li>Consultoría tecnológica</li>
          <li>Integraciones y automatización</li>
        </ul>
        <svg className="servicios-wave" width="100%" height="60" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 Q360,60 720,30 Q1080,0 1440,30" stroke="#bbb" strokeWidth="2" fill="none"/>
        </svg>
        </>
    )
}