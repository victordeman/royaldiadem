"use server";

import { supabase } from "@/lib/supabase/client";

export async function submitQuote(formData: FormData) {
  const company_name = formData.get("company_name") as string;
  const industry = formData.get("industry") as string;
  const description = formData.get("description") as string;

  // In a real Phase 5 implementation, we would handle file uploads to Supabase Storage here.
  // For the initial integration, we store the metadata.

  const { data, error } = await supabase
    .from("quotes")
    .insert([
      { company_name, industry, description, status: "pending" }
    ])
    .select();

  if (error) {
    console.error("Submission Error:", error);
    return { success: false, error: error.message };
  }

  return { success: true, data };
}
