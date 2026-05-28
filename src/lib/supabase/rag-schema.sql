-- SQL for Supabase Vector Store Initialization
-- Run this in the Supabase SQL Editor

-- 1. Enable the pgvector extension to work with embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. Create the documents table
CREATE TABLE IF NOT EXISTS documents (
  id BIGSERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  embedding VECTOR(1536) -- 1536 is the dimension for OpenAI's text-embedding-3-small
);

-- 3. Create a function to search for documents
-- This function will be called via the Supabase RPC
CREATE OR REPLACE FUNCTION match_documents (
  query_embedding VECTOR(1536),
  match_threshold FLOAT,
  match_count INT
)
RETURNS TABLE (
  id BIGINT,
  content TEXT,
  metadata JSONB,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) AS similarity
  FROM documents
  WHERE 1 - (documents.embedding <=> query_embedding) > match_threshold
  ORDER BY documents.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- 4. Create an index for faster similarity search
CREATE INDEX ON documents USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);
