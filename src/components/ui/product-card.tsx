import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductSpec {
  parameter: string;
  specification: string;
}

interface ProductCardProps {
  model: string;
  description: string;
  image: string;
  specs?: ProductSpec[];
  link?: string;
}

export function ProductCard({ model, description, image, specs, link }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden glass-premium border-white/10 group transition-all duration-300 hover:border-gold/30">
      <div className="relative aspect-[3/2] w-full bg-white/5 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[#0A2540] animate-pulse" />
        <Image
          src={image}
          alt={model}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="flex-1 flex flex-col p-6 space-y-4">
        <h3 className="text-xl font-bold text-white tracking-tight">{model}</h3>
        <p className="text-sm text-white/60 leading-relaxed">
          {description}
        </p>

        {specs && specs.length > 0 && (
          <div className="flex-1">
            <div className="overflow-hidden rounded-lg border border-white/5 bg-white/5 mt-4">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-white/10 border-b border-white/5">
                    <th className="px-3 py-2 font-semibold text-gold uppercase tracking-wider">Parameter</th>
                    <th className="px-3 py-2 font-semibold text-gold uppercase tracking-wider">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {specs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-3 py-2 text-white/80 font-medium">{spec.parameter}</td>
                      <td className="px-3 py-2 text-white/60">{spec.specification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {!specs && (
          <p className="text-xs italic text-white/40 mt-4">
            Full specifications are available on request.
          </p>
        )}

        {link && (
          <div className="pt-4">
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-gold hover:text-gold hover:bg-gold/10 gap-2"
              render={<Link href={link} target="_blank" rel="noopener noreferrer" />}
            >
              View on ORTEC <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
