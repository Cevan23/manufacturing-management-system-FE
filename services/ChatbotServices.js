import axios from 'axios';
import { TOKEN_KEY } from '@env';

export const Chatbot = async (data) => {
  const url = 'https://api.openai.com/v1/chat/completions';
  const token = TOKEN_KEY; 
  const requestBody = {
    "model": "gpt-3.5-turbo-16k",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": data
          }
        ]
      }
    ],
    "temperature": 1,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
  };
  console.log("req: ", requestBody);
  console.log("mesage: ", requestBody.messages[0].content[0].text)
  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log("res 3: ", response);
    const content = response.data.choices[0].message.content;
    return content;
  } catch (error) {
    console.error("chat bot error: ",error);
  }
};