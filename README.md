# Persona Generator Backend

This is the backend application for the Persona Generator project. It provides APIs to generate structured personas based on user input. The backend is built with **Node.js** and **Express.js**, with support for integration with third-party services like OpenAI.

## Features

- API to generate personas based on user-provided data.
- Integration with OpenAI for persona generation.
- In-memory caching to reduce redundant API calls.
- Configurable environment variables for secure key management.
- Error handling for invalid requests or backend failures.

## Prerequisites

- **Node.js** (v16 or later)
- **npm** or **yarn**
- OpenAI API Key

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/persona-generator-backend.git
cd persona-generator-backend
```

### 2. Install Dependencies

Install the required packages:

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```
PORT=4000
OPENAI_API_KEY=your-openai-api-key
```

Replace `your-openai-api-key` with your actual OpenAI API key.

### 4. Start the Server

Start the backend server:

```bash
node src/index.js
```

The server will be running at [http://localhost:4000](http://localhost:4000).

## API Endpoints

### 1. Generate Persona

**Endpoint:** `/api/persona/generate`

**Method:** `POST`

**Description:** Generates a structured persona based on the input.

#### Request Body

```json
{
  "roleTitle": "Frontend Developer",
  "linkedinProfiles": ["https://linkedin.com/in/example1"],
  "industryContext": "Tech"
}
```

#### Response Example

```json
{
  "role_context": {
    "title": "Frontend Developer",
    "seniority": "Mid-level",
    "typical_company_sizes": ["Start-ups", "Medium-sized companies"],
    "common_departments": ["Engineering", "Product Development"]
  },
  "background": {
    "typical_experience_years": "3-5 years",
    "required_skills": ["HTML", "CSS", "JavaScript", "React.js"]
  },
  "source_meta_data": {
    "time_stamp": "2024-12-27T12:00:00Z",
    "source_analyzed": [
      {
        "source_name": "LinkedIn",
        "source_link": "https://www.linkedin.com/in/example-profile"
      }
    ]
  }
}
```

### 2. Health Check (Optional)

**Endpoint:** `/api/health`

**Method:** `GET`

**Description:** Returns the status of the backend server.

#### Response Example

```json
{
  "status": "ok",
  "uptime": 3600
}
```

### Common Issues

#### 1. 500 Internal Server Error
- **Cause**: Missing required fields in the request body or backend misconfiguration.
- **Fix**: Check the request payload and ensure all required environment variables are set.

#### 2. CORS Errors
- **Cause**: Frontend and backend are on different domains or ports.
- **Fix**: Configure CORS in the backend:

```javascript
const cors = require("cors");
app.use(cors({
  origin: "http://15.206.194.28:3000/",
}));
```

#### 3. API Key Errors
- **Cause**: Invalid or missing OpenAI API key.
- **Fix**: Verify the `OPENAI_API_KEY` environment variable.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [OpenAI](https://openai.com/)

