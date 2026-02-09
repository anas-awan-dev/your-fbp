import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Create transporter with timeout settings
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: parseInt(process.env.SMTP_PORT || '587') === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 5000,    // 5 seconds
  socketTimeout: 10000,     // 10 seconds
});

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Service of Interest:</strong> ${service}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #1e40af;">
              This message was sent from the Your Finance Business Partner contact form.
              Please respond within 24 hours for the best customer experience.
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Service of Interest: ${service}

Message:
${message}

---
This message was sent from the Your Finance Business Partner contact form.
      `.trim(),
    };

    const autoReplyOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Your Finance Business Partner',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Your Finance Business Partner</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Global Financial Expertise at Your Service</p>
          </div>
          
          <div style="padding: 30px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1e3a8a; margin-top: 0;">Thank you for your message, ${name}!</h2>
            
            <p style="line-height: 1.6; color: #4b5563;">
              We've received your inquiry and one of our financial experts will review your message carefully. 
              You can expect to hear from us within 24 hours.
            </p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">What happens next?</h3>
              <ul style="color: #4b5563; line-height: 1.6;">
                <li>Our team will review your inquiry</li>
                <li>We'll prepare personalized recommendations</li>
                <li>A financial advisor will contact you to discuss your goals</li>
                <li>We'll schedule a consultation at your convenience</li>
              </ul>
            </div>
            
            <p style="line-height: 1.6; color: #4b5563;">
              In the meantime, feel free to explore our services and learn more about how we can help you 
              achieve your financial goals.
            </p>
            
            <div style="margin-top: 30px; padding: 20px; background: #dbeafe; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #1e40af; font-weight: 600;">
                Questions? Contact us directly at <a href="mailto:contact@yourfbp.com" style="color: #1e40af;">contact@yourfbp.com</a> 
                or call <a href="tel:+923098402154" style="color: #1e40af;">+92-309-8402154</a>
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
Thank you for contacting Your Finance Business Partner, ${name}!

We've received your inquiry and one of our financial experts will review your message carefully. You can expect to hear from us within 24 hours.

What happens next?
- Our team will review your inquiry
- We'll prepare personalized recommendations  
- A financial advisor will contact you to discuss your goals
- We'll schedule a consultation at your convenience

In the meantime, feel free to explore our services and learn more about how we can help you achieve your financial goals.

Questions? Contact us directly at contact@yourfbp.com or call +92-309-8402154

Best regards,
Your Finance Business Partner Team
      `.trim(),
    };

    // Use Promise.race to implement timeout
    const emailPromise = async () => {
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(autoReplyOptions);
    };

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Email sending timeout')), 15000); // 15 second timeout
    });

    await Promise.race([emailPromise(), timeoutPromise]);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', error instanceof Error ? error.message : String(error));
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    );
  }
}