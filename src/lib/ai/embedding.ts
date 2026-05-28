import { openai } from "@ai-sdk/openai";
import { embed } from "ai";

/**
 * Generates an embedding for a given text using OpenAI text-embedding-3-small.
 */
export async function generateEmbedding(text: string) {
  const { embedding } = await embed({
    model: openai.textEmbedding("text-embedding-3-small"),
    value: text,
  });
  return embedding;
}
