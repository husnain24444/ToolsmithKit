import nodemailer from 'nodemailer';

export interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const { name, email, message } = data;

  const mailOptions = {
    from: `"ToolsHub Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Contact Form Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #374151;">Message:</h3>
          <p style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This message was sent from the ToolsHub contact form.</p>
          <p>Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
