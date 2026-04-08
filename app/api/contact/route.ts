import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, country, message } = body;

  try {
    await resend.emails.send({
      from: 'onboarding@nubaramedical.com',
      to: 'baharehkor1225@gmail.com',
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
    console.error("EMAIL ERROR:", error);
  return Response.json({ error: "Email failed" }, { status: 500 });
  }
}