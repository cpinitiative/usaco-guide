import { performance } from 'node:perf_hooks';
import { calculateStats, saveResults } from './utils';

// These should be replaced with actual content query functions
async function getModules() {
  return [];
}

async function getSolutions() {
  return [];
}

async function getProblems() {
  return [];
}

interface QueryMetrics {
  queryTimes: number[];
  queryName: string;
}

export async function measureContentQueries(iterations = 1000): Promise<void> {
  const metrics: Record<string, number[]> = {
    'content.query.modules': [],
    'content.query.solutions': [],
    'content.query.problems': [],
    'content.query.combined': [],
  };

  // Warm up the cache
  console.log('Warming up content queries...');
  await Promise.all([getModules(), getSolutions(), getProblems()]);

  // Measure individual queries
  console.log('\n--- Measuring individual queries ---');

  // Measure module queries
  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    await getModules();
    metrics['content.query.modules'].push(performance.now() - start);
  }

  // Measure solution queries
  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    await getSolutions();
    metrics['content.query.solutions'].push(performance.now() - start);
  }

  // Measure problem queries
  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    await getProblems();
    metrics['content.query.problems'].push(performance.now() - start);
  }

  // Measure combined query
  console.log('\n--- Measuring combined query ---');
  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    await Promise.all([getModules(), getSolutions(), getProblems()]);
    metrics['content.query.combined'].push(performance.now() - start);
  }

  // Calculate and log statistics
  const results: any[] = [];
  const timestamp = new Date().toISOString();

  for (const [queryName, times] of Object.entries(metrics)) {
    const stats = calculateStats(times);

    results.push({
      metric: `${queryName}.avg`,
      value: stats.mean,
      unit: 'ms',
      timestamp,
      stats: {
        min: stats.min,
        max: stats.max,
        p95: stats.p95,
        stddev: stats.stddev,
      },
    });

    results.push({
      metric: `${queryName}.p95`,
      value: stats.p95,
      unit: 'ms',
      timestamp,
    });
  }

  // Save results
  await saveResults(
    results,
    `content-query-metrics-${timestamp.replace(/[:.]/g, '-')}`
  );

  console.log('\n--- Content Query Metrics ---');
  console.table(
    results
      .filter(r => r.metric.endsWith('.avg'))
      .map(({ metric, value, unit, stats }) => ({
        Query: metric.replace('.avg', ''),
        'Avg (ms)': value.toFixed(2),
        'Min (ms)': stats.min.toFixed(2),
        'Max (ms)': stats.max.toFixed(2),
        'P95 (ms)': stats.p95.toFixed(2),
        StdDev: stats.stddev.toFixed(2),
      }))
  );
}

// Run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  measureContentQueries().catch(console.error);
}
