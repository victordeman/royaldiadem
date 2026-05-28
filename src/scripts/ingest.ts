import { createClient } from '@supabase/supabase-js';
import { generateEmbedding } from '@/lib/ai/embedding';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const DOCUMENTS = [
  {
    content: "Royal Diadem Research & Laboratory is a premier scientific institution and authorized agent for ORTEC/AMETEK, Inc. We specialize in nuclear instrumentation, gamma spectroscopy, and advanced laboratory solutions.",
    metadata: { category: "about", source: "home" }
  },
  {
    content: "Our partnership with ORTEC (a business unit of AMETEK, Inc.) allows us to provide world-class gamma spectroscopy systems, alpha spectroscopy detectors, and electronic modular instruments for research and industry.",
    metadata: { category: "products", source: "ortec" }
  },
  {
    content: "Royal Diadem offers comprehensive CNC machining and fabrication services. Our facility is equipped for high-precision manufacturing of mechanical components for laboratory and industrial applications.",
    metadata: { category: "services", source: "machining" }
  },
  {
    content: "Dr. Onyagbodor Oghogho Peter is the CEO of Royal Diadem Research & Laboratory. Under his leadership, the company has become a leader in bringing advanced nuclear measurement technology to the region.",
    metadata: { category: "leadership", source: "about" }
  },
  {
    content: "We provide specialized services in Environmental Monitoring, Homeland Security radiation detection, and Industrial Gauging solutions using state-of-the-art AMETEK instrumentation.",
    metadata: { category: "services", source: "applications" }
  }
];

async function ingest() {
  console.log("Starting document ingestion...");

  for (const doc of DOCUMENTS) {
    console.log(`Processing: ${doc.content.substring(0, 50)}...`);

    try {
      const embedding = await generateEmbedding(doc.content);

      const { error } = await supabase
        .from('documents')
        .insert({
          content: doc.content,
          metadata: doc.metadata,
          embedding
        });

      if (error) {
        console.error("Error inserting document:", error);
      } else {
        console.log("Successfully ingested document.");
      }
    } catch (err) {
      console.error("Failed to generate embedding or ingest:", err);
    }
  }

  console.log("Ingestion complete.");
}

ingest().catch(console.error);
