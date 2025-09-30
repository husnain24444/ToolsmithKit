interface AdPlaceholderProps {
  type: "banner" | "rectangle" | "mobile-sticky" | "inline";
  className?: string;
}

export default function AdPlaceholder({ type, className = "" }: AdPlaceholderProps) {
  const adDimensions = {
    banner: { label: "728x90 Leaderboard", height: "h-20" },
    rectangle: { label: "336x280 Rectangle", height: "h-64" },
    "mobile-sticky": { label: "320x50 Mobile Banner", height: "h-12" },
    inline: { label: "300x250 Medium Rectangle", height: "h-48" },
  };

  const { label, height } = adDimensions[type];

  if (type === "mobile-sticky") {
    return (
      <div className={`fixed bottom-0 left-0 right-0 bg-card dark:bg-card border-t border-border p-2 md:hidden z-40 ${className}`}>
        <div className="bg-muted dark:bg-muted rounded p-3 text-center text-muted-foreground">
          <p className="text-xs mb-1">Advertisement ({label})</p>
          <div className={`${height} bg-card dark:bg-card border border-border rounded flex items-center justify-center`}>
            <span className="text-xs">Mobile Sticky AdSense</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-muted dark:bg-muted/50 ${type === "banner" ? "border-y" : ""} border-border py-4 ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`bg-card dark:bg-card border border-border rounded-lg p-${type === "inline" ? "6" : "8"} text-center text-muted-foreground ${type === "inline" ? "max-w-2xl mx-auto" : ""}`}>
          <p className="text-sm mb-2">Advertisement ({label})</p>
          <div className={`${height} bg-muted dark:bg-muted rounded ${type === "banner" ? "mt-2" : ""} flex items-center justify-center`}>
            <span className="text-xs">AdSense {type === "banner" ? "Banner" : type === "inline" ? "FAQ" : ""} Placement</span>
          </div>
        </div>
      </div>
    </div>
  );
}
