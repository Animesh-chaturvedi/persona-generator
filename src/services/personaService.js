import openai from "../config/openaiConfig.js";
import { buildPrompt } from "../utils/promptBuilder.js";

/**
 * Extracts JSON from a mixed response containing JSON and additional text.
 * @param {string} responseText - The raw response text from GPT-4.
 * @returns {Object} Parsed JSON object.
 */
const extractJSON = (responseText) => {
  const jsonStartIndex = responseText.indexOf("{");
  const jsonEndIndex = responseText.lastIndexOf("}");

  if (jsonStartIndex === -1 || jsonEndIndex === -1) {
    throw new Error("No valid JSON found in the response.");
  }

  const jsonString = responseText.substring(jsonStartIndex, jsonEndIndex + 1);
  return JSON.parse(jsonString);
};

/**
 * Generates a persona using OpenAI GPT-4 and includes source information.
 * @param {string} roleTitle - The role title.
 * @param {string[]} linkedinProfiles - Array of LinkedIn profiles (optional).
 * @param {string} industryContext - Industry-specific context (optional).
 * @returns {Promise<Object>} The structured persona and source metadata.
 */
export const generatePersona = async (roleTitle, linkedinProfiles = [], industryContext = "") => {
  const prompt = buildPrompt(roleTitle, linkedinProfiles, industryContext);

  try {
    // Use `generate()` with properly formatted message history
    const response = await openai.generate([
      [
        { role: "system", content: `
      You are an assistant that generates structured personas and includes metadata about the sources analyzed in a key called "source_analyzed" and include specific links which you have analyzed of any given source. 
      Additionally, include the exact time of response in a key called "time_stamp." 
      Prioritize data from the following sources in this specified order:
      
      1. LinkedIn Profiles: Analyze the professional profile details provided via the URLs.
      2. Top 3 Job Sites (Indeed, Glassdoor, LinkedIn Jobs): Use job postings to infer responsibilities, challenges, tools, and communication styles for the role.
      3. Reddit (r/jobs, industry-specific subreddits): Analyze community discussions for challenges and real-world experiences.
      4. Generic Search Results: Use as a fallback for additional insights.

      Use this priority while constructing the persona. Provide specific URLs used for the analysis
    `, },
        { role: "user", content: `${prompt}\n\nAlso, provide the sources you used or considered for this output.` },
      ],
    ]);

    // console.log(response,"res from gpt")
    // Extract the assistant's response
    const output = response.generations[0][0].text.trim();

    // Extract JSON (persona) and remaining text (sources)
    const persona = extractJSON(output);

    // Extract sources if available
    // const sourcesStartIndex = output.indexOf("Sources:");
    // const sources = sourcesStartIndex !== -1 ? output.substring(sourcesStartIndex + 8).trim() : "No sources provided.";

    return {
      persona,
    //   sources,
    };
  } catch (error) {
    console.error("Error generating persona:", error.message);
    throw new Error("Failed to generate persona.");
  }
};
