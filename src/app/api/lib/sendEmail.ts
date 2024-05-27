import { Resend } from "resend";

const resend = new Resend("re_inU9TQWC_CXgurxyjqdX3ewVbCGvnJkFx");

export const sendWebhookEmail = () => {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["oli.livet@gmail.com", "gpa.shared.mailbox@gmail.com"],
    subject: "GPA Build Triggered",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });
};
