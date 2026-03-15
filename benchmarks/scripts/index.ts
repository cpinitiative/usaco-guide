#!/usr/bin/env node

import { Command } from 'commander';
import { measureBuildMetrics } from './build-metrics';
import { measureCodeQuality } from './code-quality';
import { measureContentQueries } from './content-query';
import {
  measureBuildResources,
  measureDevServerResources,
} from './resource-usage';
import { measureWebVitals } from './web-vitals';

const program = new Command();

program
  .name('benchmark')
  .description('Run performance benchmarks for USACO Guide')
  .version('1.0.0');

program
  .command('all')
  .description('Run all benchmarks')
  .action(async () => {
    console.log('Starting all benchmarks...\n');

    console.log('=== Build Metrics ===');
    await measureBuildMetrics();

    console.log('\n=== Resource Usage ===');
    await measureBuildResources();
    await measureDevServerResources();

    console.log('\n=== Content Queries ===');
    // await measureContentQueries();

    console.log('\n=== Web Vitals ===');
    await measureWebVitals();

    console.log('\n=== Code Quality ===');
    await measureCodeQuality();

    console.log('\nAll benchmarks completed.');
  });

program
  .command('build')
  .description('Run build performance benchmarks')
  .action(async () => {
    await measureBuildMetrics();
  });

program
  .command('resources')
  .description('Measure resource usage')
  .action(async () => {
    await measureBuildResources();
    await measureDevServerResources();
  });

program
  .command('queries')
  .description('Measure content query performance')
  .action(async () => {
    await measureContentQueries();
  });

program
  .command('code-quality')
  .description(
    'Measure code quality metrics (TypeScript checks, linting, dependency freshness)'
  )
  .action(async () => {
    await measureCodeQuality();
  });

program
  .command('vitals')
  .description('Measure web vitals')
  .action(async () => {
    await measureWebVitals();
  });

program.parseAsync(process.argv).catch(console.error);
