require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    return { text, status: 200 }; 
  } catch (error) {
    console.error(error);
    return { error: 'An error occurred', status: 500 }; 
  }
}

module.exports = { run };