import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

export const DATA_DIR = join(process.cwd(), "benchmarks", "data");

export interface BenchmarkResult {
  metric: string;
  value: number;
  unit: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

export async function saveResults(
  results: BenchmarkResult[],
  filename: string,
): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  const filepath = join(DATA_DIR, `${filename}.json`);
  await writeFile(filepath, JSON.stringify(results, null, 2));
  console.log(`Results saved to ${filepath}`);
}

export function calculateStats(values: number[]): {
  mean: number;
  median: number;
  stddev: number;
  min: number;
  max: number;
  p95: number;
} {
  if (values.length === 0) {
    throw new Error("Cannot calculate statistics for empty array");
  }

  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const stddev = Math.sqrt(
    values.reduce((sq, n) => sq + Math.pow(n - mean, 2), 0) / values.length,
  );
  const sorted = [...values].sort((a, b) => a - b);
  const p95 = sorted[Math.floor(sorted.length * 0.95)];

  return {
    mean,
    median: sorted[Math.floor(sorted.length / 2)],
    stddev,
    min: Math.min(...values),
    max: Math.max(...values),
    p95,
  };
}

export function formatMs(ms: number): string {
  return `${ms.toFixed(2)}ms`;
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}
