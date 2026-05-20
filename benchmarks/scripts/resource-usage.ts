import { exec } from 'child_process';
import {
  EventLoopMonitorOptions,
  monitorEventLoopDelay,
  performance,
} from 'node:perf_hooks';
import { saveResults } from './utils';

// Extend NodeJS.Process interface to include memoryUsage and cpuUsage
interface ProcessWithMemory extends NodeJS.Process {
  memoryUsage: NodeJS.MemoryUsageFn;
  cpuUsage: (previousValue?: NodeJS.CpuUsage) => NodeJS.CpuUsage;
  hrtime: NodeJS.HRTime; // Use the built-in HRTime type
}

const processWithMemory = process as unknown as ProcessWithMemory;

interface ResourceUsageMetrics {
  memory: {
    rss: number[];
    heapTotal: number[];
    heapUsed: number[];
    external: number[];
    arrayBuffers: number[];
  };
  cpu: number[];
  eventLoopDelay: number[];
}

interface ProcessStats {
  cpu: number;
  memory: number;
  timestamp: number;
}

export async function measureResourceUsage(
  command: string,
  durationMs = 30000,
  sampleInterval = 1000
): Promise<ResourceUsageMetrics> {
  const metrics: ResourceUsageMetrics = {
    memory: {
      rss: [],
      heapTotal: [],
      heapUsed: [],
      external: [],
      arrayBuffers: [],
    },
    cpu: [],
    eventLoopDelay: [],
  };

  // Start the process
  const process = exec(command);
  const processStats: ProcessStats[] = [];

  // Start monitoring event loop delay
  const monitorOptions: EventLoopMonitorOptions = {
    resolution: 20, // in ms
  };
  const h = monitorEventLoopDelay(monitorOptions);
  h.enable();

  // Set up CPU usage monitoring
  let lastCpuUsage = processWithMemory.cpuUsage();
  let lastHrTime = processWithMemory.hrtime();

  // Start sampling
  const startTime = performance.now();
  let lastSampleTime = startTime;

  console.log(`Monitoring resource usage for command: ${command}`);

  return new Promise(resolve => {
    const interval = setInterval(() => {
      const now = performance.now();
      const elapsed = now - startTime;

      if (elapsed >= durationMs) {
        clearInterval(interval);
        h.disable();

        // Calculate final metrics
        metrics.eventLoopDelay = [
          h.mean,
          h.min,
          h.max,
          h.stddev,
          // @ts-ignore - percentiles might not be available in all Node.js versions
          h.percentiles?.get(95) || h.percentile(95) || 0,
        ];

        // Kill the process
        process.kill();

        console.log('Resource monitoring completed');
        resolve(metrics);
        return;
      }

      // Sample memory usage
      const memoryUsage = processWithMemory.memoryUsage();
      metrics.memory.rss.push(memoryUsage.rss);
      metrics.memory.heapTotal.push(memoryUsage.heapTotal);
      metrics.memory.heapUsed.push(memoryUsage.heapUsed);
      metrics.memory.external.push(memoryUsage.external);
      metrics.memory.arrayBuffers.push(memoryUsage.arrayBuffers || 0);

      // Sample CPU usage
      const currentHrTime = processWithMemory.hrtime();
      const currentCpuUsage = processWithMemory.cpuUsage(lastCpuUsage);

      const timeDelta =
        (currentHrTime[0] - lastHrTime[0]) * 1e6 +
        (currentHrTime[1] - lastHrTime[1]) / 1e3;

      const cpuPercent =
        ((currentCpuUsage.user + currentCpuUsage.system) / (timeDelta * 1000)) *
        100;
      metrics.cpu.push(cpuPercent);

      lastCpuUsage = processWithMemory.cpuUsage();
      lastHrTime = currentHrTime;

      // Store process stats
      processStats.push({
        cpu: cpuPercent,
        memory: memoryUsage.rss / 1024 / 1024, // Convert to MB
        timestamp: now,
      });

      lastSampleTime = now;
    }, sampleInterval);
  });
}

export async function measureBuildResources(): Promise<void> {
  console.log('Measuring resource usage during build...');
  const buildMetrics = await measureResourceUsage('yarn build');

  const timestamp = new Date().toISOString();
  const results = [
    {
      metric: 'build.memory.heap.peak',
      value: Math.max(...buildMetrics.memory.heapUsed) / 1024 / 1024,
      unit: 'MB',
      timestamp,
    },
    {
      metric: 'build.memory.rss.peak',
      value: Math.max(...buildMetrics.memory.rss) / 1024 / 1024,
      unit: 'MB',
      timestamp,
    },
    {
      metric: 'build.cpu.peak',
      value: Math.max(...buildMetrics.cpu),
      unit: '%',
      timestamp,
    },
    {
      metric: 'build.event_loop_delay.p95',
      value: buildMetrics.eventLoopDelay[3], // 95th percentile
      unit: 'ms',
      timestamp,
    },
  ];

  await saveResults(
    results,
    `resource-usage-build-${timestamp.replace(/[:.]/g, '-')}`
  );
  console.log('Build resource usage measurement completed');
}

export async function measureDevServerResources(): Promise<void> {
  console.log('Measuring resource usage of dev server...');
  const devMetrics = await measureResourceUsage('yarn dev', 60000);

  const timestamp = new Date().toISOString();
  const results = [
    {
      metric: 'dev.memory.heap.peak',
      value: Math.max(...devMetrics.memory.heapUsed) / 1024 / 1024,
      unit: 'MB',
      timestamp,
    },
    {
      metric: 'dev.memory.rss.peak',
      value: Math.max(...devMetrics.memory.rss) / 1024 / 1024,
      unit: 'MB',
      timestamp,
    },
    {
      metric: 'dev.cpu.peak',
      value: Math.max(...devMetrics.cpu),
      unit: '%',
      timestamp,
    },
    {
      metric: 'dev.event_loop_delay.p95',
      value: devMetrics.eventLoopDelay[3], // 95th percentile
      unit: 'ms',
      timestamp,
    },
  ];

  await saveResults(
    results,
    `resource-usage-dev-${timestamp.replace(/[:.]/g, '-')}`
  );
  console.log('Dev server resource usage measurement completed');
}

// Run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  (async () => {
    try {
      await measureBuildResources();
      await measureDevServerResources();
    } catch (error) {
      console.error('Error measuring resource usage:', error);
      process.exit(1);
    }
  })();
}
