import { Download, Shield } from "lucide-react";
import type { ReactNode } from "react";

interface DownloadItem {
  name: string;
  url: string;
  signature?: string;
}

interface DownloadCardProps {
  title: string;
  description?: string;
  architecture?: string;
  icon?: ReactNode;
  downloads: DownloadItem[];
}

export default function DownloadCard({
  title,
  description,
  architecture,
  icon,
  downloads,
}: DownloadCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-150">
      <div className="flex items-start gap-4 mb-4">
        {icon && (
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="heading-sm text-foreground">{title}</h3>
          {description && (
            <p className="text-small text-muted-foreground mt-1">{description}</p>
          )}
          {architecture && (
            <span className="inline-block mt-2 text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
              {architecture}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        {downloads.map((dl) => (
          <div
            key={dl.name}
            className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 bg-muted/50 rounded-md"
          >
            <span className="text-sm font-mono text-foreground flex-1 truncate">
              {dl.name}
            </span>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={dl.url}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </a>
              {dl.signature && (
                <a
                  href={dl.signature}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-border text-foreground rounded-md hover:bg-secondary transition-colors"
                >
                  <Shield className="w-3.5 h-3.5" />
                  Signature
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
