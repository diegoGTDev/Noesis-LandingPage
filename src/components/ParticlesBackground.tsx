import { useEffect, useRef, useState } from 'react';
import '../styles/ParticlesBackground.css';

interface Particle {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
}

interface ParticlesBackgroundProps {
  className?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  
  // Hook para detectar si es móvil
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const cantidadDeParticulas = isMobile ? 50 : 120; // Menos partículas en móvil
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Ajustar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Inicializar partículas
    particlesRef.current = Array(cantidadDeParticulas).fill(null).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2
    }));

    // Seguimiento del mouse (solo en desktop)
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        const rect = canvas.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    if (!isMobile) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    // Función de animación
    const animate = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#1a1a1a';
      ctx.strokeStyle = 'rgba(26, 26, 26, 0.1)';

      particlesRef.current.forEach((particle, i) => {
        // Mover partículas
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Efecto del mouse (solo en desktop)
        if (!isMobile) {
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            particle.x += (dx / distance) * 2;
            particle.y += (dy / distance) * 2;
          }
        }

        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Dibujar líneas de conexión
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Limpieza
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (!isMobile) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMobile, mousePos.x, mousePos.y, cantidadDeParticulas]);

  return (
    <div 
      ref={containerRef}
      className={`particles-background-container ${className}`}
    >
      <canvas ref={canvasRef} className="particles-canvas" />
    </div>
  );
};

export default ParticlesBackground;