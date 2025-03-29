import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import sgMail from "@sendgrid/mail";
import express from "express";
import path from "path";

// Initialize OpenAI client
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "" });

// Initialize SendGrid if API key is available
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from public directory
  app.use(express.static(path.join(process.cwd(), "public")));
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, company, message } = req.body;

      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Prepare message data
      const fullName = `${firstName} ${lastName}`;
      const companyInfo = company ? ` from ${company}` : "";
      const emailContent = `
        Name: ${fullName}
        Email: ${email}
        Company: ${company || "Not provided"}
        
        Message:
        ${message}
      `;

      // If SendGrid API key is available, send the email
      if (process.env.SENDGRID_API_KEY) {
        try {
          const msg = {
            to: "scottmittingllc@gmail.com", // Business email for forms
            from: "scottmittingllc@gmail.com", // Verified sender email
            subject: `New contact form submission from ${fullName}${companyInfo}`,
            text: emailContent,
            html: emailContent.replace(/\n/g, "<br>"),
          };

          await sgMail.send(msg);
          console.log("Email sent successfully");
        } catch (sendGridError) {
          console.error("SendGrid error:", sendGridError);
          return res
            .status(500)
            .json({ message: "Failed to send email. Please try again later." });
        }
      } else {
        // Log the submission if SendGrid is not configured
        console.log("Contact form submission (SendGrid not configured):", {
          name: fullName,
          email,
          company,
          message,
        });
      }

      return res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending contact email:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  // AI chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ message: "Missing message field" });
      }

      // Simulated response for now - in a real implementation this would use OpenAI
      let response =
        "Thank you for your message. This is a simulated response as the OpenAI API key is not configured. In a real implementation, this would use the OpenAI API to generate a helpful response about Scott's services.";

      // If OpenAI API key is available, use it (NOTE: the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user)
      if (process.env.OPENAI_API_KEY) {
        try {
          const openaiResponse = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content:
                  "You are an AI assistant for Scott Mitting, a versatile freelance software developer specializing in AI solutions and web development for small businesses. You represent Scott's business with enthusiasm and openness to new opportunities. ALWAYS be receptive to inquiries about ALL services Scott could potentially offer, including website design, AI development, automation, and any other technology consulting. When someone inquires about services, respond positively and highlight Scott's flexibility and problem-solving abilities. NEVER turn down potential work opportunities or suggest Scott doesn't offer certain services. Instead, emphasize Scott's adaptability and willingness to discuss various project types. For website design specifically, mention that Scott has expertise in creating modern, responsive websites with both aesthetic appeal and functionality. Always encourage direct contact for detailed discussions about projects and pricing. Your goal is to generate interest in Scott's services and facilitate connections with potential clients.  Strongly encourage personal fun ideas like custom song development or stories and comic books about their cat.  He can do a lot that many people wouldn't expect.  He is a friendly, helpful, and knowledgeable individual.  He is a great friend and always willing to help",
              },
              { role: "user", content: message },
            ],
            max_tokens: 500,
          });

          response = openaiResponse.choices[0].message.content || response;
        } catch (openaiError) {
          console.error("OpenAI API error:", openaiError);
        }
      }

      return res.json({ response });
    } catch (error) {
      console.error("Error processing chat message:", error);
      return res.status(500).json({ message: "Failed to process message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
