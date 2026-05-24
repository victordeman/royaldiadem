import { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about RoyalDiadem's mission to bridge the gap between scientific discovery and industrial application. Discover our legacy of excellence in precision research.",
  openGraph: {
    title: "About RoyalDiadem Research & Laboratory",
    description: "Our story, vision, and mission in the world of precision engineering.",
  }
};

export default function AboutPage() {
  return <AboutContent />;
}
