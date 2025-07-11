import { Resend } from "resend";

// Cargar dotenv solo en desarrollo usando import dinámico
if (process.env.NODE_ENV !== "production") {
  import("dotenv").then((dotenv) => dotenv.config());
}

// Netlify Function handler
export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { nombre, email, mensaje } = await request.json();
  if (!nombre || !email || !mensaje) {
    return new Response(JSON.stringify({ error: "Faltan campos requeridos" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const api_key: string = process.env.VITE_api_key || "";
  const resend = new Resend(api_key);
  try {
    await resend.emails.send({
      from: "Noesis <Noesis@resend.dev>",
      to: ["delivered@resend.dev", "andreelopez334@gmail.com", "noesis.startup@gmail.com"],
      subject: "Nuevo mensaje de contacto",
      html: `<p>Nombre: ${nombre}</p><p>Email: ${email}</p><p>Mensaje: ${mensaje}</p>`,
    });
    return new Response(
      JSON.stringify({ message: "Correo enviado correctamente" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error al enviar el correo" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
