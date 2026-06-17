import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Format isi email yang masuk
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Dikirim ke Gmail kamu sendiri
      subject: `Pesan Baru Restoran dari ${firstName} ${lastName}`,
      html: `
        <h3>Ada Pesan Baru dari Form Kontak Restoran</h3>
        <p><strong>Nama:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `,
    };

    // 3. Eksekusi kirim email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email terkirim!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Gagal mengirim email.' }, { status: 500 });
  }
}