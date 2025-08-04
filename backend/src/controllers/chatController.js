const axios = require("axios");

async function handleLLMChat(req, res) {
  try {
    const { message } = req.body;
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "system",
            content: `You are a helpful and friendly assistant that only answers questions related to mental health, therapy, stress, depression, anxiety, exercise, and meditation. Politely ignore or redirect irrelevant queries.`,
          },
          {
            role: "user",
            content: message,
          },
        ],
      },
      {
        headers:{
            Authorization:`Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type":"application/json",
        },
      }
    );
    const reply=response.data.choices[0].message.content;
    res.status(200).json({
        reply,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error,
      message: "Error in LLM chat route",
    });
  }
}

module.exports = {
  handleLLMChat,
};
