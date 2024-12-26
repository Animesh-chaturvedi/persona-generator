// import { generatePersona } from "./services/personaService.js";

// /**
//  * Runs the persona generation process.
//  */
// const runApp = async () => {
//   const roleTitle = "Frontend Developer";
//   const linkedinProfiles = [
//     "https://www.linkedin.com/in/animesh-chaturvedi-a75620154/",
//     // "https://www.linkedin.com/in/sample-profile-2",
//   ];
//   const industryContext = "Technology";

//   try {
//     const persona = await generatePersona(roleTitle, linkedinProfiles, industryContext);
//     console.log("Generated Persona:", JSON.stringify(persona, null, 2));
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// };

// runApp();


import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors"; // Import CORS middleware
import personaRoutes from "./routes/personaRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json());

// Routes
app.use("/api/persona", personaRoutes);

export default app;

