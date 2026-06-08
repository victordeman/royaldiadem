import { createOpenAI } from "@ai-sdk/openai";
import { embed } from "ai";

/**
 * Generates an embedding for a given text using Hugging Face (OpenAI-compatible).
 * Uses nomic-ai/nomic-embed-text-v1.5 to maintain the 1536 dimension requirement.
 */
export async function generateEmbedding(text: string) {
  const apiKey = process.env.HF_API_TOKEN;

  if (!apiKey) {
    throw new Error('Embedding configuration error: Missing API Key (HF_API_TOKEN)');
  }

  const hf = createOpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: apiKey,
  });

  const { embedding } = await embed({
    model: hf.textEmbedding("nomic-ai/nomic-embed-text-v1.5"),
    value: text,
  });

  return embedding;
}
