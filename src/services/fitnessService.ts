import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function getGenXFitnessInfo() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Provide detailed information about 'GenX Fitness' in Kathmandu, Nepal. Include their exact address, phone number, opening hours, services/classes offered, and any unique selling points or vibe. Format the response as a JSON object with keys: name, address, phone, hours, services, vibe, description.",
    config: {
      responseMimeType: "application/json",
    },
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    console.error("Failed to parse GenX Fitness info", e);
    return null;
  }
}
