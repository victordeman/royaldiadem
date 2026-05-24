import { Metadata } from "next";
import CapabilitiesContent from "./capabilities-content";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities",
  description: "Explore our world-class precision engineering capabilities, including CNC machining, injection molding, and contract assembly.",
};

export default function CapabilitiesPage() {
  return <CapabilitiesContent />;
}
