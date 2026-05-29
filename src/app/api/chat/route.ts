import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { generateEmbedding } from "@/lib/ai/embedding";
import { searchSimilarDocuments } from "@/lib/ai/vector-store";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const { messages } = await req.json();

  // 1. Get the last message to use for retrieval
  const lastMessage = messages[messages.length - 1];

  // 2. Generate embedding for the query
  const embedding = await generateEmbedding(lastMessage.content);

  // 3. Search for relevant context in Supabase
  const context = await searchSimilarDocuments(embedding);
  const contextText = context.map(doc => doc.content).join("\n\n---\n\n");

  // 4. Create the stream using Qwen via Hugging Face OpenAI-compatible API
  const hf = createOpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.HF_API_TOKEN,
  });

  const result = await streamText({
    model: hf.chat("Qwen/Qwen2.5-72B-Instruct"),
    messages,
    system: `You are the Royal Diadem Technical Assistant.
    You are professional, scientific, and helpful.
    Use the following context to answer the user's questions about Royal Diadem Research & Laboratory, its products (like ORTEC/AMETEK spectroscopy systems), and its services.

    If the context doesn't contain the answer, say that you don't have that specific information but offer to help with general knowledge about the field or suggest contacting the company directly.

    Context:
    ${contextText}`,
  });

  return result.toDataStreamResponse();
}
