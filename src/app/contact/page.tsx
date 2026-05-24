import { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the RoyalDiadem engineering team for project inquiries and laboratory services.",
};

export default function ContactPage() {
  return <ContactContent />;
}
