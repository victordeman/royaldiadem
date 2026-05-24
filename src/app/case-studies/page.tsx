import { Metadata } from "next";
import CaseStudiesContent from "./case-studies-content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real-world examples of how RoyalDiadem delivers precision and excellence across various mission-critical projects.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
