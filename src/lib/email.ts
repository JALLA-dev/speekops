import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface BookingEmailData {
  name: string;
  email: string;
  company?: string;
  date: string;
  timeSlot: string;
  notes?: string;
}

export async function sendThankYouEmail(booking: BookingEmailData) {
  const { name, email, company, date, timeSlot, notes } = booking;
  const firstName = name.split(' ')[0];

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo Confirmed - Staffless AI</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0f; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
          
          <!-- Logo Header -->
          <tr>
            <td align="center" style="padding-bottom: 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7); -webkit-background-clip: text; padding: 8px 0;">
                    <h1 style="margin: 0; font-size: 28px; font-weight: 800; color: #8b5cf6; letter-spacing: -0.5px;">⚡ Staffless AI</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background: linear-gradient(145deg, #13131f, #1a1a2e); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 16px; padding: 0; overflow: hidden;">
              
              <!-- Gradient Top Bar -->
              <div style="height: 4px; background: linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7, #6366f1);"></div>

              <!-- Success Badge -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 40px 40px 16px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 100px; padding: 8px 20px;">
                          <span style="color: #22c55e; font-size: 13px; font-weight: 600; letter-spacing: 0.5px;">✓ DEMO CONFIRMED</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Greeting -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 16px 40px 8px;">
                    <h2 style="margin: 0; color: #f1f1f3; font-size: 24px; font-weight: 700; text-align: center;">
                      Thank you, ${firstName}! 🎉
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 40px 32px;">
                    <p style="margin: 0; color: #a1a1b5; font-size: 15px; line-height: 1.6; text-align: center;">
                      Your demo session with Staffless AI has been successfully booked. We're excited to show you how AI-powered automation can transform your workflows.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Booking Details Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 0 40px 32px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: rgba(99, 102, 241, 0.05); border: 1px solid rgba(99, 102, 241, 0.15); border-radius: 12px;">
                      <tr>
                        <td style="padding: 24px;">
                          <p style="margin: 0 0 16px; color: #8b5cf6; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                            📅 Session Details
                          </p>
                          
                          <!-- Date -->
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 12px;">
                            <tr>
                              <td style="color: #a1a1b5; font-size: 14px; padding: 6px 0; width: 120px;">Date</td>
                              <td style="color: #f1f1f3; font-size: 14px; font-weight: 600; padding: 6px 0;">${date}</td>
                            </tr>
                          </table>
                          
                          <!-- Time -->
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 12px;">
                            <tr>
                              <td style="color: #a1a1b5; font-size: 14px; padding: 6px 0; width: 120px;">Time</td>
                              <td style="color: #f1f1f3; font-size: 14px; font-weight: 600; padding: 6px 0;">${timeSlot}</td>
                            </tr>
                          </table>
                          
                          <!-- Company (if provided) -->
                          ${company ? `
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 12px;">
                            <tr>
                              <td style="color: #a1a1b5; font-size: 14px; padding: 6px 0; width: 120px;">Company</td>
                              <td style="color: #f1f1f3; font-size: 14px; font-weight: 600; padding: 6px 0;">${company}</td>
                            </tr>
                          </table>
                          ` : ''}

                          <!-- Notes (if provided) -->
                          ${notes ? `
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="color: #a1a1b5; font-size: 14px; padding: 6px 0; width: 120px;">Focus Area</td>
                              <td style="color: #f1f1f3; font-size: 14px; padding: 6px 0;">${notes}</td>
                            </tr>
                          </table>
                          ` : ''}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What to Expect -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 0 40px 32px;">
                    <p style="margin: 0 0 16px; color: #f1f1f3; font-size: 16px; font-weight: 600;">
                      What to expect:
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; color: #a1a1b5; font-size: 14px; line-height: 1.5;">
                          <span style="color: #8b5cf6; margin-right: 8px;">→</span> Live walkthrough of AI voice agents &amp; automation
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #a1a1b5; font-size: 14px; line-height: 1.5;">
                          <span style="color: #8b5cf6; margin-right: 8px;">→</span> Custom demo tailored to your industry workflows
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #a1a1b5; font-size: 14px; line-height: 1.5;">
                          <span style="color: #8b5cf6; margin-right: 8px;">→</span> ROI analysis for your specific use case
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #a1a1b5; font-size: 14px; line-height: 1.5;">
                          <span style="color: #8b5cf6; margin-right: 8px;">→</span> Q&amp;A with our AI solutions team
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 0 40px 40px;">
                    <a href="https://stafflessai.com" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 600; padding: 14px 32px; border-radius: 10px; letter-spacing: 0.3px;">
                      Visit Staffless AI →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 20px; text-align: center;">
              <p style="margin: 0 0 8px; color: #4a4a5a; font-size: 13px;">
                Need to reschedule? Reply to this email and we'll help.
              </p>
              <p style="margin: 0; color: #3a3a4a; font-size: 12px;">
                © ${new Date().getFullYear()} Staffless AI. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const { data: result, error } = await resend.emails.send({
    from: 'Staffless AI <onboarding@resend.dev>',
    to: email,
    subject: `🎉 Demo Confirmed – ${date} at ${timeSlot} | Staffless AI`,
    html: htmlContent,
  });

  if (error) {
    console.error('Resend email error:', error);
    throw new Error(`Failed to send confirmation email: ${error.message}`);
  }

  return result;
}
