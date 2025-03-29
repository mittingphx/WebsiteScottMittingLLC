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
  app.use(express.static(path.join(process.cwd(), 'public')));
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { firstName, lastName, email, company, message } = req.body;
      
      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Prepare message data
      const fullName = `${firstName} ${lastName}`;
      const companyInfo = company ? ` from ${company}` : '';
      const emailContent = `
        Name: ${fullName}
        Email: ${email}
        Company: ${company || 'Not provided'}
        
        Message:
        ${message}
      `;
      
      // If SendGrid API key is available, send the email
      if (process.env.SENDGRID_API_KEY) {
        try {
          const msg = {
            to: 'scottmittingllc@gmail.com', // Business email for forms
            from: 'scottmittingllc@gmail.com', // Verified sender email
            subject: `New contact form submission from ${fullName}${companyInfo}`,
            text: emailContent,
            html: emailContent.replace(/\n/g, '<br>')
          };
          
          await sgMail.send(msg);
          console.log("Email sent successfully");
        } catch (sendGridError) {
          console.error("SendGrid error:", sendGridError);
          return res.status(500).json({ message: "Failed to send email. Please try again later." });
        }
      } else {
        // Log the submission if SendGrid is not configured
        console.log("Contact form submission (SendGrid not configured):", {
          name: fullName,
          email,
          company,
          message
        });
      }
      
      return res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending contact email:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });
  
  // AI chat endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message) {
        return res.status(400).json({ message: "Missing message field" });
      }
      
      // Simulated response for now - in a real implementation this would use OpenAI
      let response = "Thank you for your message. This is a simulated response as the OpenAI API key is not configured. In a real implementation, this would use the OpenAI API to generate a helpful response about Scott's services.";
      
      // If OpenAI API key is available, use it (NOTE: the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user)
      if (process.env.OPENAI_API_KEY) {
        try {
          const openaiResponse = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system", 
                content: "You are an AI assistant for Scott Mitting, a freelance software developer specializing in AI solutions for small businesses. Answer questions professionally and knowledgeably about Scott's services, expertise in AI/ML development, and how AI can help small businesses. Keep responses concise and helpful. If you don't know specific details about Scott's business that aren't covered in your training, suggest contacting Scott directly for more information."
              },
              { role: "user", content: message }
            ],
            max_tokens: 500
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
