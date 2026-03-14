import { exec } from "child_process";
import { promisify } from "util";
import { performance } from "node:perf_hooks";
import { saveResults } from "./utils";
import fetch from "node-fetch";

const execAsync = promisify(exec);

interface BuildMetrics {
  BUILD_COLD: number[];
  BUILD_WARM: number[];
  DEV_STARTUP: number[];
}

async function runCommand(
  cmd: string,
): Promise<{ stdout: string; stderr: string }> {
  console.log(`Running: ${cmd}`);
  return execAsync(cmd);
}

async function measureColdBuild(): Promise<number> {
  try {
    await runCommand("rm -rf .next .vercel .cache");
    const start = performance.now();
    await runCommand("yarn build");
    return performance.now() - start;
  } catch (error) {
    console.error("Cold build failed:", error);
    throw error;
  }
}

async function measureWarmBuild(): Promise<number> {
  try {
    const start = performance.now();
    await runCommand("yarn build");
    return performance.now() - start;
  } catch (error) {
    console.error("Warm build failed:", error);
    throw error;
  }
}

async function measureDevStartup(): Promise<number> {
  let serverProcess: any = null;

  try {
    // Clean dev server cache
    // await runCommand('rm -rf .next .vercel .cache');

    // Start the dev server
    const start = performance.now();

    serverProcess = exec("yarn dev");

    // Wait for server to be ready by polling the health/ready endpoint
    const maxAttempts = 60; // 60 seconds timeout
    const pollInterval = 1000; // 1 second

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        // Next.js typically starts on port 3000
        const response = await fetch("http://localhost:3000", {
          timeout: 2000,
        });

        // Check if we get a valid response (any status code means server is up)
        if (response.ok || response.status) {
          const end = performance.now();
          return end - start;
        }
      } catch (error) {
        // Server not ready yet, continue polling
        if (attempt === maxAttempts) {
          throw new Error("Dev server failed to start within timeout period");
        }

        // Wait before next attempt
        await new Promise((resolve) => setTimeout(resolve, pollInterval));
      }
    }

    throw new Error("Dev server failed to start");
  } finally {
    // Clean up: kill the dev server process
    if (serverProcess) {
      serverProcess.kill();
      // Give it a moment to clean up
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

export async function measureBuildMetrics(iterations = 5): Promise<void> {
  const metrics: BuildMetrics = {
    BUILD_COLD: [],
    BUILD_WARM: [],
    DEV_STARTUP: [],
  };

  // Measure cold builds
  for (let i = 0; i < iterations; i++) {
    console.log(`\n--- Cold Build ${i + 1}/${iterations} ---`);
    const duration = await measureColdBuild();
    metrics.BUILD_COLD.push(duration);
    console.log(
      `Cold build ${i + 1} completed in ${(duration / 1000).toFixed(2)}s`,
    );
  }

  // Warm up build cache
  console.log("\n--- Warming up build cache ---");
  await runCommand("yarn build");

  // Measure warm builds
  for (let i = 0; i < iterations; i++) {
    console.log(`\n--- Warm Build ${i + 1}/${iterations} ---`);
    const duration = await measureWarmBuild();
    metrics.BUILD_WARM.push(duration);
    console.log(
      `Warm build ${i + 1} completed in ${(duration / 1000).toFixed(2)}s`,
    );
  }

  // Measure dev server startup
  for (let i = 0; i < iterations; i++) {
    console.log(`\n--- Dev Server Startup ${i + 1}/${iterations} ---`);
    const duration = await measureDevStartup();
    metrics.DEV_STARTUP.push(duration);
    console.log(`Dev server started in ${(duration / 1000).toFixed(2)}s`);
  }

  // Save results
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const results = [
    ...metrics.BUILD_COLD.map((duration, i) => ({
      metric: "BUILD_COLD",
      value: duration,
      unit: "ms",
      timestamp: new Date().toISOString(),
      iteration: i + 1,
    })),
    ...metrics.BUILD_WARM.map((duration, i) => ({
      metric: "BUILD_WARM",
      value: duration,
      unit: "ms",
      timestamp: new Date().toISOString(),
      iteration: i + 1,
    })),
    ...metrics.DEV_STARTUP.map((duration, i) => ({
      metric: "DEV_STARTUP",
      value: duration,
      unit: "ms",
      timestamp: new Date().toISOString(),
      iteration: i + 1,
    })),
  ];

  await saveResults(results, `build-metrics-${timestamp}`);
  console.log("\n--- Build Metrics Completed ---");
  console.log("Results saved to benchmarks/data/");
}

// Run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  measureBuildMetrics().catch(console.error);
}
