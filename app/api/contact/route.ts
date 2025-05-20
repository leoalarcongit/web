import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined');
      return Response.json({ error: 'Servicio de email no configurado' }, { status: 500 });
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error('CONTACT_EMAIL is not defined');
      return Response.json({ error: 'Email de contacto no configurado' }, { status: 500 });
    }

    console.log('Intentando enviar email con los siguientes datos:', {
      to: process.env.CONTACT_EMAIL,
      subject,
      name,
      email
    });

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    console.log('Email sent successfully:', data);
    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Detailed error:', error);
    return Response.json({ 
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
