import { Metadata } from "next";
import QuotesDashboard from "./quotes-dashboard";

export const metadata: Metadata = {
  title: "RFQ Dashboard | Admin",
  robots: { index: false, follow: false }
};

export default function AdminQuotesPage() {
  return <QuotesDashboard />;
}
