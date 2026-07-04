// Human relative time: "just now", "3 hours ago", "1 week ago", "4 years ago".
// Shared by the server (build-time fallback) and the client component.
export function timeAgo(input: Date | string | number): string {
  const date = input instanceof Date ? input : new Date(input);
  const ms = date.getTime();
  if (Number.isNaN(ms)) return "";

  const seconds = Math.round((Date.now() - ms) / 1000);
  if (seconds < 45) return "just now";

  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;

  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;

  const days = Math.round(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;

  if (days < 30) {
    const weeks = Math.round(days / 7);
    return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
  }

  if (days < 365) {
    const months = Math.round(days / 30);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  }

  const years = Math.round(days / 365);
  return `${years} year${years === 1 ? "" : "s"} ago`;
}

export function toISO(input: Date | string | number): string {
  const date = input instanceof Date ? input : new Date(input);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString();
}
