import { NextRequest } from "next/server";
import { sendWebhookEmail } from "../lib/sendEmail";

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

export async function POST(req: NextRequest) {
  try {
    sendWebhookEmail();

    return Response.json("Webhook email sent");
  } catch (e) {
    console.error(e);
    return Response.json(e);
  }
  // return Response.json({ coucou: "test" });
}
