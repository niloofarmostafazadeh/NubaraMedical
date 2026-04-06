import { Resend } from 'resend';

const resend = new Resend(process.env.re_6y37ukjq_7Ksv9uBmBdmuZaK415brHiWp);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, country, message } = body;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@nubaramediacal.com',
      subject: 'New Consultation Request',
      html: `
        <h2>New Consultation Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Message:</b> ${message || "-"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error });
  }
}