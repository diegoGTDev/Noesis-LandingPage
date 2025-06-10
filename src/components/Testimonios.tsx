import {useState, useRef, useEffect} from 'react';


export default function Testimonios({ testimonios, interval = 8000 }: { testimonios: {nombre: string, texto: string}[], interval?: number }) {
    
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState('');
  const total = testimonios.length;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = () => {
    setAnim('slide-next');
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
      setAnim('');
    }, 350);
  };
  const prev = () => {
    setAnim('slide-prev');
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + total) % total);
      setAnim('');
    }, 350);
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, interval);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [index, interval, total]);

  const getIdx = (offset: number) => (index + offset + total) % total;
  const visibles = [getIdx(-1), getIdx(0), getIdx(1)];

  return (
    <div className={`testimonios-carrusel ${anim}`}>
      <div className="testimonios-carrusel-inner">
        {visibles.map((idx, pos) => (
          <div
            key={idx}
            className={`testimonio-carrusel ${pos === 1 ? 'central' : 'lateral'}`}
          >
            <div className="testimonio-cuerpo">{`"${testimonios[idx].texto}"`}</div>
            <div className="testimonio-firma">- {testimonios[idx].nombre}</div>
          </div>
        ))}
      </div>
      <div className="testimonios-carrusel-controles">
        <button className="slider-arrow" onClick={prev} aria-label="Anterior">&#8592;</button>
        <button className="slider-arrow" onClick={next} aria-label="Siguiente">&#8594;</button>
      </div>
    </div>
  );
}