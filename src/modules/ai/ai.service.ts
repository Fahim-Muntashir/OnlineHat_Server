import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "../../config";

export const AIService = {
  generateServiceDescription: async (title: string) => {
    if (!config.gemini_api_key || config.gemini_api_key === "your_gemini_api_key_here") {
      throw new Error("GEMINI_API_KEY is not configured. Please add a valid key to your .env file.");
    }

    const genAI = new GoogleGenerativeAI(config.gemini_api_key);
    
    // Using gemini-flash-latest as it was confirmed working with this key
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `Write a professional and catchy service description for a freelancer marketplace like Fiverr or Upwork.
    Service Title: "${title}"
    
    The description should include:
    1. A brief introduction.
    2. Key features or what's included.
    3. Why choose this service.
    4. A call to action.
    
    Keep it within 200-300 words. Format it with clear paragraphs and bullet points if necessary.
    Output only the description text.`;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text;
    } catch (error: any) {
      if (error.message?.includes("429")) {
        throw new Error("AI Quota exceeded. This usually means the free tier is at its limit or you need to enable billing in Google Cloud.");
      }
      throw error;
    }
  },

  chatWithAI: async (message: string, history: any[], userContext: any = null) => {
    if (!config.gemini_api_key || config.gemini_api_key === "your_gemini_api_key_here") {
      throw new Error("GEMINI_API_KEY is not configured. Please add a valid key to your .env file.");
    }

    const genAI = new GoogleGenerativeAI(config.gemini_api_key);
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    let systemPrompt = `You are "OnlineHat Assistant", a helpful and professional AI chatbot for the OnlineHat freelancer marketplace.
    OnlineHat is a platform where buyers can hire freelancers (sellers) for various services like web development, graphic design, writing, etc.
    
    Your goal is to provide instant assistance to both buyers and sellers.
    
    Guidelines:
    - Be polite, professional, and concise.
    - Help users with product information, order status, account issues, and general platform support.
    - If you don't know the answer, suggest they contact human support at support@onlinehat.com.
    - Use Markdown for formatting (bold, lists, etc.) to make responses readable.
    - If the user asks about their specific data, use the provided context below.`;

    if (userContext) {
      systemPrompt += `\n\nUser Context:\n${JSON.stringify(userContext, null, 2)}`;
    }

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am OnlineHat Assistant. How can I help you today?" }],
        },
        ...history
      ],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    try {
      const result = await chat.sendMessage(message);
      const response = await result.response;
      return response.text();
    } catch (error: any) {
      if (error.message?.includes("429")) {
        throw new Error("AI Quota exceeded.");
      }
      throw error;
    }
  },
};
