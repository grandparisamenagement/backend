import { NextRequest } from "next/server";
import { sendWebhookEmail } from "../lib/sendEmail";

import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_SENDER_API_KEY_2);

// export async function GET(req: NextRequest) {
//   try {
//     return Response.json("test route");
//   } catch (e) {
//     sendWebhookEmail();
//     console.error(e);
//     return Response.json(e);
//   }
//   // return Response.json({ coucou: "test" });
// }

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Grand Paris Webhook <webhook@gpa-email.olivierlivet.net>",
      to: ["oli.livet@gmail.com", "jordan.ricker@goingpublic.fr"],
      subject: "GPA Webhook Triggered via Vercel Webhook Serverless Function",
      html: "<p>Contentful Update Webhook triggered.</p>",
      //   react: EmailTemplate({ firstName: "John" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
