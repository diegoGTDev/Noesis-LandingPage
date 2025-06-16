import { Resend } from 'resend';
const api_key: string = import.meta.env.VITE_api_key || ""; 

const resend = new Resend(api_key);

export async function sendEmail(nombre: string, email: string, mensaje: string) {

    await resend.emails.send({
    from: 'Contacto <noesis@startup.dev>',
    to: ['andreelopez334@gmail.com'],
    subject: 'Nuevo mensaje de contacto',
    html: `<p>Nombre: ${nombre}</p>
           <p>Email: ${email}</p>
           <p>Mensaje: ${mensaje}</p>`,
    });
}