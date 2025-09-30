export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validate JSON string
 */
export function validateJSON(jsonString: string): ValidationResult {
  if (!jsonString.trim()) {
    return { valid: false, error: "JSON input is empty" };
  }

  try {
    JSON.parse(jsonString);
    return { valid: true };
  } catch (error) {
    if (error instanceof Error) {
      return { valid: false, error: error.message };
    }
    return { valid: false, error: "Invalid JSON format" };
  }
}

/**
 * Format JSON with indentation
 */
export function formatJSON(jsonString: string): string {
  try {
    const parsed = JSON.parse(jsonString);
    return JSON.stringify(parsed, null, 2);
  } catch (error) {
    throw new Error("Cannot format invalid JSON");
  }
}

/**
 * Minify JSON (remove whitespace)
 */
export function minifyJSON(jsonString: string): string {
  try {
    const parsed = JSON.parse(jsonString);
    return JSON.stringify(parsed);
  } catch (error) {
    throw new Error("Cannot minify invalid JSON");
  }
}

/**
 * Download JSON as file
 */
export function downloadJSON(jsonString: string, filename = "formatted.json"): void {
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Parse and get JSON tree structure
 */
export function getJSONStructure(jsonString: string): any {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
}

/**
 * Count JSON properties
 */
export function countJSONProperties(jsonString: string): number {
  try {
    const parsed = JSON.parse(jsonString);
    return Object.keys(parsed).length;
  } catch (error) {
    return 0;
  }
}
