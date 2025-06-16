import { Resend } from 'resend';

// Cargar dotenv solo en desarrollo usando import dinámico
if (process.env.NODE_ENV !== 'production') {
  import('dotenv').then(dotenv => dotenv.config());
}

// Netlify Function handler
export default async function handler(event: any) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  const { nombre, email, mensaje } = JSON.parse(event.body || '{}');
  if (!nombre || !email || !mensaje) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Faltan campos requeridos' })
    };
  }

  const api_key: string = process.env.VITE_api_key || "";
  const resend = new Resend(api_key);

  try {
    await resend.emails.send({
      from: 'Contacto <noesis@startup.dev>',
      to: ['andreelopez334@gmail.com'],
      subject: 'Nuevo mensaje de contacto',
      html: `<p>Nombre: ${nombre}</p><p>Email: ${email}</p><p>Mensaje: ${mensaje}</p>`
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Correo enviado correctamente' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al enviar el correo' })
    };
  }
}