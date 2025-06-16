import { Resend } from 'resend';
// Si pruebas localmente, puedes requerir dotenv aquí:
import dotenv from 'dotenv';
dotenv.config();

export async function sendEmail(nombre: string, email: string, mensaje: string) {
    const api_key: string = process.env.VITE_api_key || ""; 
    
    const resend = new Resend(api_key);

    await resend.emails.send({
    from: 'Contacto <noesis@startup.dev>',
    to: ['andreelopez334@gmail.com'],
    subject: 'Nuevo mensaje de contacto',
    html: `<p>Nombre: ${nombre}</p>
           <p>Email: ${email}</p>
           <p>Mensaje: ${mensaje}</p>`,
    });
}