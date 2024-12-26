// import "dotenv/config";
// import "./app.js";

// // Run the application
// // runApp();


import app from "./app.js";

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
