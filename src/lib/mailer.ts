import nodemailer from 'nodemailer';

export interface LeadData {
    fullName: string;
    email: string;
    phone?: string;
    companyName?: string;
    message?: string;
    businessActivity?: string;
    source: string;
}

/**
 * Creates a fresh Nodemailer transporter per call.
 * This is the correct pattern for serverless environments (Vercel Functions)
 * where module-level singletons can be reused across warm instances
 * with stale credentials or closed sockets.
 *
 * Zoho SMTP rules:
 *   - Custom domain (Paid org) → smtppro.zoho.com / smtppro.zoho.eu
 *   - Personal @zohomail.com  → smtp.zoho.com
 *   - Port 465 + secure:true  → SSL (recommended)
 *   - Password              → App-Specific Password if 2FA is enabled
 */
function createTransporter() {
    const host = process.env.ZOHO_SMTP_HOST;
    const user = process.env.ZOHO_SMTP_USER;
    const pass = process.env.ZOHO_SMTP_PASS;

    if (!host || !user || !pass) {
        throw new Error(
            'Missing SMTP configuration. ' +
            'Ensure ZOHO_SMTP_HOST, ZOHO_SMTP_USER, and ZOHO_SMTP_PASS are set in your environment.'
        );
    }

    return nodemailer.createTransport({
        host,
        port: 465,
        secure: true,          // TLS wrapped from the start (SSL) — required by Zoho on 465
        auth: { user, pass },
        pool: false,           // disable connection pooling — safer in serverless cold starts
        socketTimeout: 30_000, // 30 s timeout for slow serverless environments
    });
}

const ADMIN_EMAIL = 'contact@sevenoakprestige.com';

export async function sendLeadEmails(
    data: LeadData
): Promise<{ success: boolean; error?: string }> {
    const transporter = createTransporter();
    const senderEmail = process.env.ZOHO_SMTP_USER as string;

    // ── 1. Admin notification email ──────────────────────────────────────────
    // replyTo = lead's email so clicking Reply goes directly to the lead
    const adminMail = {
        from:    `Seven Oak Prestige <${senderEmail}>`,
        to:      ADMIN_EMAIL,
        replyTo: data.email,
        subject: `New Lead — ${data.source} | ${data.fullName}`,
        html: `
            <div style="font-family:sans-serif;padding:20px;color:#333;max-width:600px">
              <h2 style="color:#d4af37;margin-bottom:4px">New Lead Submission</h2>
              <p style="color:#888;margin-top:0">Source: <strong>${data.source}</strong></p>
              <table style="width:100%;border-collapse:collapse;margin-top:16px;font-size:14px">
                <tr>
                  <td style="padding:8px 12px;border:1px solid #e5e5e5;background:#f9f9f9;width:160px"><strong>Name</strong></td>
                  <td style="padding:8px 12px;border:1px solid #e5e5e5">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 12px;border:1px solid #e5e5e5;background:#f9f9f9"><strong>Email</strong></td>
                  <td style="padding:8px 12px;border:1px solid #e5e5e5">
                    <a href="mailto:${data.email}">${data.email}</a>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding:8px 12px;border:1px solid #e5e5e5;background:#f9f9f9"><strong>Phone / WhatsApp</strong></td>
                  <td style="padding:8px 12px;border:1px solid #e5e5e5">${data.phone}</td>
                </tr>` : ''}
                ${data.companyName ? `
                <tr>
                  <td style="padding:8px 12px;border:1px solid #e5e5e5;background:#f9f9f9"><strong>Company</strong></td>
                  <td style="padding:8px 12px;border:1px solid #e5e5e5">${data.companyName}</td>
                </tr>` : ''}
                ${data.businessActivity ? `
                <tr>
                  <td style="padding:8px 12px;border:1px solid #e5e5e5;background:#f9f9f9"><strong>Business Activity</strong></td>
                  <td style="padding:8px 12px;border:1px solid #e5e5e5">${data.businessActivity}</td>
                </tr>` : ''}
                ${data.message ? `
                <tr>
                  <td style="padding:8px 12px;border:1px solid #e5e5e5;background:#f9f9f9"><strong>Message</strong></td>
                  <td style="padding:8px 12px;border:1px solid #e5e5e5">${data.message}</td>
                </tr>` : ''}
              </table>
            </div>
        `,
    };

    // ── 2. Client auto-reply ─────────────────────────────────────────────────
    const clientMail = {
        from:    `Seven Oak Prestige <${senderEmail}>`,
        to:      data.email,
        subject: `We received your enquiry — Seven Oak Prestige`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:28px;color:#333">
              <h2 style="color:#d4af37">Thank You for Reaching Out</h2>
              <p>Dear ${data.fullName},</p>
              <p>We have received your enquiry and a member of our team will be in touch shortly.</p>
              <p>If you have any immediate questions, simply reply to this email or reach us at
                <a href="mailto:${ADMIN_EMAIL}" style="color:#d4af37">${ADMIN_EMAIL}</a>.
              </p>
              <br>
              <p>Best regards,<br><strong>The Seven Oak Prestige Team</strong></p>
              <p>
                <a href="https://www.sevenoakprestige.com" style="color:#d4af37;text-decoration:none">
                  www.sevenoakprestige.com
                </a>
              </p>
            </div>
        `,
    };

    try {
        await Promise.all([
            transporter.sendMail(adminMail),
            transporter.sendMail(clientMail),
        ]);
        return { success: true };
    } catch (error) {
        const msg = (error as Error).message;
        console.error('[mailer] sendLeadEmails failed:', msg);
        return { success: false, error: msg };
    }
}
