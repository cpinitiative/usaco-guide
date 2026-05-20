import { exec } from 'child_process';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { promisify } from 'util';
import { calculateStats, saveResults } from './utils';

const execAsync = promisify(exec);

interface LighthouseResult {
  categories: {
    performance: {
      score: number;
    };
  };
  audits: Record<
    string,
    {
      id: string;
      title: string;
      description: string;
      score: number | null;
      displayValue: string;
      numericValue: number;
      numericUnit: string;
    }
  >;
}

const PAGES_TO_TEST = [
  '/',
  '/dashboard',
  '/problems', // Add more pages as needed
];

async function runLighthouse(
  url: string,
  outputPath: string
): Promise<LighthouseResult> {
  const { stdout } = await execAsync(
    `npx lighthouse ${url} --output=json --output-path=${outputPath} --chrome-flags="--headless --no-sandbox --disable-gpu" --only-categories=performance`
  );

  const result = JSON.parse(
    await readFile(outputPath, 'utf-8')
  ) as LighthouseResult;
  return result;
}

export async function measureWebVitals(iterations = 5): Promise<void> {
  const results: any[] = [];
  const timestamp = new Date().toISOString();

  // Start the production server in the background
  const serverProcess = exec('yarn start');

  try {
    // Wait for server to be ready
    await new Promise(resolve => setTimeout(resolve, 10000));

    for (const page of PAGES_TO_TEST) {
      const url = `http://localhost:3000${page}`;
      console.log(`\n--- Testing ${url} ---`);

      const metrics: Record<string, number[]> = {
        LCP: [],
        FCP: [],
        CLS: [],
        INP: [],
        TBT: [],
        SI: [],
        TTI: [],
      };

      for (let i = 0; i < iterations; i++) {
        console.log(`Run ${i + 1}/${iterations}`);
        const outputPath = join(process.cwd(), `lighthouse-${Date.now()}.json`);

        try {
          const result = await runLighthouse(url, outputPath);

          // Extract metrics
          metrics.LCP.push(
            result.audits['largest-contentful-paint'].numericValue
          );
          metrics.FCP.push(
            result.audits['first-contentful-paint'].numericValue
          );
          metrics.CLS.push(
            result.audits['cumulative-layout-shift'].numericValue
          );
          metrics.INP.push(
            result.audits['interaction-to-next-paint']?.numericValue || 0
          );
          metrics.TBT.push(result.audits['total-blocking-time'].numericValue);
          metrics.SI.push(result.audits['speed-index'].numericValue);
          metrics.TTI.push(result.audits['interactive'].numericValue);

          // Clean up
          await execAsync(`rm ${outputPath}`);
        } catch (error) {
          console.error(`Error running Lighthouse for ${url}:`, error);
        }
      }

      // Calculate statistics for each metric
      for (const [metric, values] of Object.entries(metrics)) {
        if (values.length === 0) continue;

        const stats = calculateStats(values);

        results.push({
          metric: `web.vitals.${metric.toLowerCase()}`,
          value: stats.mean,
          unit: metric === 'CLS' ? 'unitless' : 'ms',
          timestamp,
          page,
          stats: {
            min: stats.min,
            max: stats.max,
            p95: stats.p95,
            stddev: stats.stddev,
          },
        });
      }
    }

    // Save results
    await saveResults(results, `web-vitals-${timestamp.replace(/[:.]/g, '-')}`);

    console.log('\n--- Web Vitals Metrics ---');
    console.table(
      results.map(({ metric, value, unit, page, stats }) => ({
        Page: page,
        Metric: metric.split('.').pop(),
        Value: `${value.toFixed(2)}${unit === 'ms' ? 'ms' : ''}`,
        Min: `${stats.min.toFixed(2)}`,
        Max: `${stats.max.toFixed(2)}`,
        P95: `${stats.p95.toFixed(2)}`,
      }))
    );
  } finally {
    // Clean up
    serverProcess.kill();
  }
}

// Run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  measureWebVitals().catch(console.error);
}
