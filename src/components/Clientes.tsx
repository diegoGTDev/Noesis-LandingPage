export default function Clientes() {
    const logosGenericos = [
      'https://upload.wikimedia.org/wikipedia/commons/6/69/LEGO_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
    ];
    const marqueeLogos = [...logosGenericos, ...logosGenericos, ...logosGenericos, ...logosGenericos, ...logosGenericos];
    return (
        <>
            <div className="logos-titulo"><em>La gente está hablando</em></div>
            <div className="marquee">
                <div className="marquee-inner slow-marquee">
                    {marqueeLogos.map((src, i) => (
                        <img src={src} alt={`Logo cliente ${i + 1}`} key={i} className="logo-cliente" />
                    ))}
                </div>
                <svg className="hero-wave" width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,40 Q360,0 720,40 Q1080,80 1440,40" stroke="#bbb" strokeWidth="2" fill="none" />
                </svg>
            </div>
        </>
    )
}