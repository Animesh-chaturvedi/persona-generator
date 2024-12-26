import { ChatOpenAI } from "@langchain/openai";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Initialize OpenAI GPT-4 model
const openai = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY, // Load API key from .env
  temperature: 0.7, // Adjust creativity level
  modelName: "gpt-4", // Use GPT-4 model
});

export default openai;
