import { exec } from 'child_process';
import { performance } from 'node:perf_hooks';
import { promisify } from 'util';
import { BenchmarkResult, saveResults } from './utils';

const execAsync = promisify(exec);

interface CodeQualityMetrics {
  TS_CHECK_TIME: number[];
  LINT_TIME: number[];
  FRESH_DEPS: number;
}

async function measureTypeCheckTime(): Promise<number> {
  const start = performance.now();
  try {
    await execAsync('yarn check-ts-errors');
    return performance.now() - start;
  } catch (error) {
    console.error('Type checking failed:', error);
    return -1; // Return -1 to indicate failure
  }
}

async function measureLintTime(): Promise<number> {
  const start = performance.now();
  try {
    await execAsync('yarn eslint');
    return performance.now() - start;
  } catch (error) {
    console.error('Linting failed:', error);
    return -1; // Return -1 to indicate failure
  }
}

async function countOutdatedDependencies(): Promise<number> {
  try {
    // Get outdated packages in JSON format
    const { stdout } = await execAsync('npm outdated --json', {
      maxBuffer: 10 * 1024 * 1024,
    }); // 10MB buffer

    if (!stdout.trim()) {
      return 0; // No outdated dependencies
    }

    try {
      const outdatedPackages = JSON.parse(stdout);
      return Object.keys(outdatedPackages).length;
    } catch (parseError) {
      console.error('Failed to parse outdated packages:', parseError);
      return -1;
    }
  } catch (error: any) {
    // If the command fails but returns valid JSON in stdout (npm outdated returns non-zero exit code when there are outdated packages)
    if (error.stdout) {
      try {
        const outdatedPackages = JSON.parse(error.stdout);
        return Object.keys(outdatedPackages).length;
      } catch (parseError) {
        console.error(
          'Failed to parse outdated packages from error output:',
          parseError
        );
      }
    }
    console.error('Failed to check outdated dependencies:', error);
    return -1;
  }
}

export async function measureCodeQuality(iterations = 3): Promise<void> {
  const metrics: CodeQualityMetrics = {
    TS_CHECK_TIME: [],
    LINT_TIME: [],
    FRESH_DEPS: 0,
  };

  // Measure TypeScript check time
  console.log('\n=== Measuring TypeScript Check Time ===');
  for (let i = 0; i < iterations; i++) {
    console.log(`Run ${i + 1}/${iterations}...`);
    const duration = await measureTypeCheckTime();
    if (duration >= 0) {
      metrics.TS_CHECK_TIME.push(duration);
      console.log(`Type check completed in ${(duration / 1000).toFixed(2)}s`);
    }
  }

  // Measure ESLint time
  console.log('\n=== Measuring ESLint Time ===');
  for (let i = 0; i < iterations; i++) {
    console.log(`Run ${i + 1}/${iterations}...`);
    const duration = await measureLintTime();
    if (duration >= 0) {
      metrics.LINT_TIME.push(duration);
      console.log(`Linting completed in ${(duration / 1000).toFixed(2)}s`);
    }
  }

  // Count outdated dependencies (only once as it doesn't change between runs)
  console.log('\n=== Checking for Outdated Dependencies ===');
  const outdatedCount = await countOutdatedDependencies();
  if (outdatedCount >= 0) {
    metrics.FRESH_DEPS = outdatedCount;
    console.log(`Found ${outdatedCount} outdated dependencies`);
  }

  // Prepare results for saving
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const results: BenchmarkResult[] = [
    ...metrics.TS_CHECK_TIME.map((duration, i) => ({
      metric: 'TS_CHECK_TIME',
      value: duration,
      unit: 'ms',
      timestamp: new Date().toISOString(),
      iteration: i + 1,
    })),
    ...metrics.LINT_TIME.map((duration, i) => ({
      metric: 'LINT_TIME',
      value: duration,
      unit: 'ms',
      timestamp: new Date().toISOString(),
      iteration: i + 1,
    })),
    {
      metric: 'FRESH_DEPS',
      value: metrics.FRESH_DEPS,
      unit: 'count',
      timestamp: new Date().toISOString(),
    },
  ];

  await saveResults(results, `code-quality-${timestamp}`);
  console.log('\n--- Code Quality Metrics Completed ---');
  console.log('Results saved to benchmarks/data/');
}

// Run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  measureCodeQuality().catch(console.error);
}
