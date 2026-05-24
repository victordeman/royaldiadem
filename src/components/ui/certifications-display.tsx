import { cn } from "@/lib/utils";

interface CertificationsDisplayProps {
  certifications: {
    name: string;
    logo?: string;
  }[];
  className?: string;
}

export function CertificationsDisplay({ certifications, className }: CertificationsDisplayProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all", className)}>
      {certifications.map((cert) => (
        <div key={cert.name} className="flex items-center gap-2">
          <div className="h-10 w-10 bg-muted rounded flex items-center justify-center font-bold text-xs">
            {cert.name.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="font-semibold text-sm">{cert.name}</span>
        </div>
      ))}
    </div>
  );
}
