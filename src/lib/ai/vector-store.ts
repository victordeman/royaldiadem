import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "http://placeholder";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder";

const supabase = createClient(supabaseUrl, supabaseKey);

export interface Document {
  id: number;
  content: string;
  metadata: Record<string, unknown>;
  similarity?: number;
}

/**
 * Searches for similar documents in the database using vector similarity.
 */
export async function searchSimilarDocuments(
  queryEmbedding: number[],
  matchThreshold: number = 0.5,
  matchCount: number = 5
): Promise<Document[]> {
  if (supabaseUrl === "http://placeholder") return [];

  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: queryEmbedding,
    match_threshold: matchThreshold,
    match_count: matchCount,
  });

  if (error) {
    console.error("Error searching similar documents:", error);
    throw error;
  }

  return data as Document[];
}

/**
 * Inserts a document with its embedding into the database.
 */
export async function insertDocument(content: string, embedding: number[], metadata: Record<string, unknown> = {}) {
  if (supabaseUrl === "http://placeholder") return;

  const { error } = await supabase.from("documents").insert({
    content,
    embedding,
    metadata,
  });

  if (error) {
    console.error("Error inserting document:", error);
    throw error;
  }
}
