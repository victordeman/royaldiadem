import { Metadata } from "next";
import QuoteContent from "./quote-content";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Submit your project specifications for a detailed technical proposal and cost estimate from our experts.",
};

export default function QuotePage() {
  return <QuoteContent />;
}
