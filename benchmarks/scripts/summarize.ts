import { readFile } from 'node:fs/promises';
import { calculateStats, DATA_DIR } from './utils';

export interface BenchmarkResult {
  metric: string;
  value: number;
  unit: string;
  timestamp: string;
  iteration?: number;
  [key: string]: unknown;
}

export interface MetricStats {
  metric: string;
  unit: string;
  count: number;
  median: number;
  mean: number;
  stddev: number;
  min: number;
  max: number;
  p95: number;
}

export async function summarizeFile(filePath: string): Promise<MetricStats[]> {
  // Read and parse the JSON file
  const fileContent = await readFile(filePath, 'utf-8');
  const data: BenchmarkResult[] = JSON.parse(fileContent);

  // Group results by metric
  const metrics = new Map<string, { values: number[]; unit: string }>();

  for (const entry of data) {
    if (!metrics.has(entry.metric)) {
      metrics.set(entry.metric, { values: [], unit: entry.unit });
    }
    metrics.get(entry.metric)?.values.push(entry.value);
  }

  // Calculate stats for each metric
  const results: MetricStats[] = [];

  for (const [metric, { values, unit }] of metrics.entries()) {
    const stats = calculateStats(values);

    results.push({
      metric,
      unit,
      count: values.length,
      median: stats.median,
      ...stats,
    });
  }

  return results;
}

export function formatMetricStats(stats: MetricStats[]): string {
  return stats
    .map(metric => {
      const isMs = metric.unit === 'ms';
      const convert = (val: number) =>
        isMs ? (val / 1000).toFixed(2) : val.toFixed(2);
      const unit = isMs ? 's' : metric.unit;

      return `${metric.metric} (${unit}):
  Count:  ${metric.count}
  Median: ${convert(metric.median)}
  Mean:   ${convert(metric.mean)} ± ${convert(metric.stddev)}
  Range:  ${convert(metric.min)} - ${convert(metric.max)}
  95th %: ${convert(metric.p95)}`;
    })
    .join('\n\n');
}

const stats = await summarizeFile(
  DATA_DIR + '\\code-quality-2026-02-17T20-31-56-847Z.json'
);
console.log(formatMetricStats(stats));
