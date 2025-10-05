export interface RecentTool {
  href: string;
  label: string;
  category: "finance" | "developer";
  timestamp: number;
}

const STORAGE_KEY = "recentTools";
const MAX_RECENT_TOOLS = 6;

export function addRecentTool(tool: Omit<RecentTool, "timestamp">) {
  if (typeof window === "undefined") return;

  const recent = getRecentTools();
  const newTool: RecentTool = {
    ...tool,
    timestamp: Date.now(),
  };

  const filtered = recent.filter((t) => t.href !== tool.href);
  const updated = [newTool, ...filtered].slice(0, MAX_RECENT_TOOLS);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function getRecentTools(): RecentTool[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function clearRecentTools() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
