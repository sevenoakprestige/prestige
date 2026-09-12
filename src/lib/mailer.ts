import nodemailer from 'nodemailer';

interface LeadData {
    fullName: string;
    email: string;
    phone?: string;
    companyName?: string;
    message?: string;
    source: string;
}

const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
    },
});

export const sendLeadEmails = async (data: LeadData) => {
    const adminEmail = 'contact@sevenoakprestige.com';
    const senderEmail = process.env.ZOHO_SMTP_USER || adminEmail;

    // 1. Send Email to Admin
    const adminMailOptions = {
        from: `Seven Oak Prestige <${senderEmail}>`,
        to: adminEmail,
        subject: `New Lead from ${data.source} - ${data.fullName}`,
        html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
                <h2 style="color: #d4af37;">New Lead Submission</h2>
                <p><strong>Source:</strong> ${data.source}</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.fullName}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
                    ${data.phone ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone/WhatsApp:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>` : ''}
                    ${data.companyName ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.companyName}</td></tr>` : ''}
                    ${data.message ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.message}</td></tr>` : ''}
                </table>
            </div>
        `,
    };

    // 2. Send Confirmation Email to Client
    const clientMailOptions = {
        from: `Seven Oak Prestige <${senderEmail}>`,
        to: data.email,
        subject: `Thank you for contacting Seven Oak Prestige`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
                <h2 style="color: #d4af37;">Thank You for Reaching Out</h2>
                <p>Dear ${data.fullName},</p>
                <p>We have successfully received your inquiry. A member of our executive team will review your details and get back to you shortly.</p>
                <p>If you have any immediate questions, feel free to reply directly to this email.</p>
                <br />
                <p>Best regards,</p>
                <p><strong>The Seven Oak Prestige Team</strong></p>
                <p><a href="https://www.sevenoakprestige.com" style="color: #d4af37; text-decoration: none;">www.sevenoakprestige.com</a></p>
            </div>
        `,
    };

    try {
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(clientMailOptions)
        ]);
        return { success: true };
    } catch (error) {
        console.error('Error sending emails:', error);
        return { success: false, error: (error as Error).message };
    }
};
