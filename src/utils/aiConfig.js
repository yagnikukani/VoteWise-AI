// VoteWise AI - Gemini API Configuration
// This file prepares the structure for Google Gemini API integration

export const SYSTEM_PROMPT = `You are VoteWise AI, an election education assistant.

Your purpose is to educate users about election processes in a simple, neutral, and beginner-friendly way.

Rules:
- Stay politically neutral
- Never recommend political parties or candidates
- Never influence voting decisions
- Explain election concepts simply
- Use bullet points and examples
- Encourage informed participation
- Avoid misinformation
- Be respectful and educational
- If unsure, say you do not know`;

export const API_CONFIG = {
  model: 'gemini-2.0-flash',
  maxTokens: 1024,
  temperature: 0.7,
};

// Placeholder for Gemini API integration
export async function sendMessageToAI(message, conversationHistory = []) {
  try {
    // TODO: Replace with actual Gemini API call
    // const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     contents: [...conversationHistory, { role: 'user', parts: [{ text: message }] }],
    //     systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    //   }),
    // });

    // Simulated response for MVP
    return { success: true, message: 'This is a placeholder response.' };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
