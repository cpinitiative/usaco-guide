// example url: https://atcoder.jp/contests/arc084/tasks/arc084_b
import { sanitizeTitle } from './sanitize';

export default function parseAc(url: string, html: string) {
  const titleRegex = /<span class="h2">[\r\n\t]+(.*?)[\r\n\t]+/;
  const rawName =
    html.match(titleRegex)?.[1]?.split('-', 2)?.[1]?.trim() ?? 'Unknown';
  // F-05: sanitize the extracted title before returning it
  const name = sanitizeTitle(rawName);

  // F-14: derive uniqueId from the URL path (stable, URL-based) rather than
  // the problem name (unstable — renames break existing progress records, and
  // two problems with the same name would collide).
  // URL path example: /contests/arc084/tasks/arc084_b  →  taskId = "arc084_b"
  let taskId: string;
  try {
    const pathname = new URL(url).pathname; // e.g. /contests/arc084/tasks/arc084_b
    taskId = pathname.split('/').filter(Boolean).at(-1) ?? 'unknown';
  } catch {
    taskId = 'unknown';
  }

  return {
    uniqueId: `ac-${taskId}`, // e.g. ac-arc084_b
    name,
    source: 'AC',
    solutionMetadata: { kind: 'none' },
  };
}
