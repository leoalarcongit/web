import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined');
      return Response.json({ error: 'Email service not configured' }, { status: 500 });
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error('CONTACT_EMAIL is not defined');
      return Response.json({ error: 'Contact email not configured' }, { status: 500 });
    }

    console.log('Attempting to send email with data:', {
      to: process.env.CONTACT_EMAIL,
      subject,
      name,
      email
    });

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
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
