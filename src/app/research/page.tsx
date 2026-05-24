import { Metadata } from "next";
import ResearchContent from "./research-content";

export const metadata: Metadata = {
  title: "Research & Development",
  description: "RoyalDiadem's focus areas in AI-integrated manufacturing, advanced materials science, and sustainable processes.",
};

export default function ResearchPage() {
  return <ResearchContent />;
}
