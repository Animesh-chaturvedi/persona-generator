/**
 * Builds a structured prompt for generating a persona.
 * @param {string} roleTitle - The title of the role.
 * @param {string[]} linkedinProfiles - Array of LinkedIn profiles (optional).
 * @param {string} industryContext - Industry-specific context (optional).
 * @returns {string} The constructed prompt.
 */
export const buildPrompt = (roleTitle, linkedinProfiles = [], industryContext = "") => {
    return `
      Generate a structured persona for the following:
      - Role Title: ${roleTitle}
      - LinkedIn Profiles: ${linkedinProfiles.join(", ")}
      - Industry Context: ${industryContext}
  
      Output format:
      {
        "role_context": {
          "title": "",
          "seniority": "",
          "typical_company_sizes": [],
          "common_departments": []
        },
        "background": {
          "typical_experience_years": "",
          "required_skills": [],
          "common_previous_roles": []
        },
        "daily_work": {
          "primary_responsibilities": [],
          "key_stakeholders": [],
          "common_meetings": [],
          "typical_deliverables": []
        },
        "challenges": {
          "hair_on_fire_problems": [],
          "common_frustrations": [],
          "time_sinks": []
        },
        "tools": {
          "core_stack": [],
          "common_workflows": [],
          "tool_pain_points": []
        },
        "communication": {
          "common_phrases": [],
          "technical_terms": [],
          "writing_style_notes": []
        },
        "source_meta_data:{
           "time_stamp":"",
           source_analyzed:[],
        }
      }
    `;
  };
  