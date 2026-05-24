import { Metadata } from "next";
import IndustriesContent from "./industries-content";

export const metadata: Metadata = {
  title: "Industries Served",
  description: "Precision manufacturing solutions for Aerospace, Medical, Defense, and High-End Electronics sectors.",
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
