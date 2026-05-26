import { Metadata } from "next";
import ProductsContent from "./products-content";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our world-class research and laboratory products, featuring high-purity germanium detectors and advanced spectroscopic solutions.",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
