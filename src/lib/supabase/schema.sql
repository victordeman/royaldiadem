-- SQL for Supabase Table Initialization
-- This will be executed via the Supabase Dashboard or CLI

-- Create the quotes table
CREATE TABLE IF NOT EXISTS quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  company_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT DEFAULT 'pending', -- pending, reviewing, quoted, rejected
  technical_drawings_urls TEXT[] -- Array of URLs for uploaded files
);

-- Enable Row Level Security (RLS)
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

-- Allow anonymous submissions
CREATE POLICY "Allow anonymous insertions" ON quotes
  FOR INSERT WITH CHECK (true);

-- Allow authenticated admins to read/update
-- Note: Replace 'admin-role-id' with actual role check logic if needed
CREATE POLICY "Allow admin read" ON quotes
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow admin update" ON quotes
  FOR UPDATE TO authenticated USING (true);
