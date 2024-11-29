import axios from 'axios';

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL; // Replace with your API URL

export const sendQuery = async (msg, sessionId) => {
  try {
    const response = await axios.post(API_ENDPOINT, {
      query: msg, session_id: sessionId,
    });
    return response.data; // Adjust based on API response structure
  } catch (error) {
    console.error('Error sending query:', error);
    throw error; // Optionally, handle error
  }
};
