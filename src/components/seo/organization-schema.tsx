import { Organization, WithContext } from "schema-dts";

export function OrganizationSchema() {
  const schema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RoyalDiadem Research & Laboratory",
    "url": "https://royaldiademresearchlaboratory-8ml7ui2yc.vercel.app",
    "logo": "https://royaldiademresearchlaboratory-8ml7ui2yc.vercel.app/favicon.ico",
    "description": "Authorized agent of Altek, Inc. specializing in precision CNC machining, injection molding, and industrial research.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1200 Innovation Drive",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
