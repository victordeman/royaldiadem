import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { generateEmbedding } from "@/lib/ai/embedding";
import { searchSimilarDocuments } from "@/lib/ai/vector-store";
import { NextResponse } from "next/server";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages provided" }, { status: 400 });
    }

    if (!process.env.HF_API_TOKEN) {
      console.error("Missing HF_API_TOKEN environment variable");
      return NextResponse.json({ error: "Chat configuration error: Missing API Token" }, { status: 500 });
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error("Missing OPENAI_API_KEY environment variable");
      return NextResponse.json({ error: "Embedding configuration error: Missing API Key" }, { status: 500 });
    }

    console.log(`Processing chat request with ${messages.length} messages`);

    // 1. Get the last message to use for retrieval
    const lastMessage = messages[messages.length - 1];

    // 2. Generate embedding for the query
    let embedding;
    try {
      console.log("Generating embedding for query...");
      embedding = await generateEmbedding(lastMessage.content);
    } catch (error) {
      console.error("Error generating embedding:", error);
      return NextResponse.json({ error: "Failed to process query (Embedding generation failed)" }, { status: 500 });
    }

    // 3. Search for relevant context in Supabase
    let contextText = "";
    try {
      console.log("Searching for relevant context...");
      const context = await searchSimilarDocuments(embedding);
      contextText = context.map(doc => doc.content).join("\n\n---\n\n");
      console.log(`Found ${context.length} relevant documents`);
    } catch (error) {
      console.error("Error searching similar documents:", error);
      // Continue without context if vector search fails, or handle as error
    }

    // 4. Create the stream using Qwen via Hugging Face OpenAI-compatible API
    console.log("Creating AI stream...");
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

    console.log("Stream created successfully");
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Critical error in /api/chat:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
