import express from "express";
import { generatePersona } from "../services/personaService.js";

const router = express.Router();

/**
 * POST /api/persona/generate
 * Endpoint to generate a structured persona with embedded sources.
 */
router.post("/generate", async (req, res) => {
  const { roleTitle, linkedinProfiles, industryContext } = req.body;

  // Validate required fields
  if (!roleTitle) {
    return res.status(400).json({ error: "Role title/description is required" });
  }

  try {
    const persona = await generatePersona(roleTitle, linkedinProfiles || [], industryContext || "");
    console.log(persona,"persona from gpt");
    res.status(200).json({ success: true, persona });
  } catch (error) {
    console.error("Error generating persona:", error.message);
    res.status(500).json({ error: "Failed to generate persona." });
  }
});

export default router;
