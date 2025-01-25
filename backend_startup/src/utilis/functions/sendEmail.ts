import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";
import { UserFormSchemaType } from "../../zod";
import "dotenv/config";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILAPI || "", // Make sure to replace with your actual API key
});

const email = async (data: UserFormSchemaType) => {
  try {
    const sentFrom = new Sender(
      process.env.SENDEREMAIL || "no-reply@trial-3yxj6ljrr0x4do2r.mlsender.net",
      process.env.SENDERNAME || "Welurality Team",
    );
    const recipients = [
      new Recipient(
        process.env.RECIPIENTEMAIL || "dev10jai@gmail.com",
        process.env.RECIPIENTNAME || "Jai Thakur",
      ),
    ];

    const textContent = `User Form Submission:
----------------------
Name: ${data.name}
Email: ${data.email}
Phone Number: ${data.phoneNumber}
Company: ${data.company ? data.company : "N/A"}
Services: ${data.services.length > 0 ? data.services.join(", ") : "No services selected"}
New or Rebuild: ${data.newOrRebuild}
Website Needs: ${data.websiteNeeds}
Budget: ${data.budget}
Expected Delivery Time: ${data.timeFrame}`;

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("New User Form Submission")
      .setText(textContent);

    const response = await mailerSend.email.send(emailParams);
    if (response.body !== "") {
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export { email };
