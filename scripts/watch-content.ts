import { spawn } from 'child_process';
import chokidar from 'chokidar';
import { existsSync } from 'fs';
import http from 'http';
import path from 'path';
import { CONTENT_DIR, DB_FILE, SOLUTIONS_DIR } from '../src/lib/constants';

const SSE_PORT = 3001;
const sseClients = new Set<http.ServerResponse>();

function startSseServer() {
  const server = http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    });
    res.flushHeaders();
    sseClients.add(res);
    req.on('close', () => sseClients.delete(res));
  });
  server.on('error', err => {
    console.warn(
      `[watch] SSE server could not start on port ${SSE_PORT}:`,
      err.message
    );
  });
  server.listen(SSE_PORT, () => {
    console.log(`[watch] SSE reload server on port ${SSE_PORT}`);
  });
  return server;
}

function broadcastReload() {
  for (const client of sseClients) {
    client.write('data: reload\n\n');
  }
}

async function watchContent() {
  startSseServer();

  if (!existsSync(DB_FILE) || process.env.NODE_ENV === 'production') {
    console.log('[watch] Building content.db...');
    const { main } = await import('./index-content');
    await main();
  } else {
    console.log('[watch] Using cached content.db. Watching for changes...');
  }

  // Start Next.js dev server as a child process
  const nextProc = spawn('npx', ['next', 'dev'], {
    stdio: 'inherit',
    env: { ...process.env },
    shell: process.platform === 'win32',
  });

  const cleanup = (signal: NodeJS.Signals) => {
    nextProc.kill(signal);
    process.exit(0);
  };
  process.on('SIGINT', () => cleanup('SIGINT'));
  process.on('SIGTERM', () => cleanup('SIGTERM'));
  nextProc.on('exit', code => process.exit(code ?? 0));

  // Debounced incremental rebuilds
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;
  const pending = new Map<string, 'change' | 'add' | 'unlink'>();

  const scheduleRebuild = (
    event: 'change' | 'add' | 'unlink',
    filePath: string
  ) => {
    pending.set(filePath, event);
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      debounceTimer = null;
      const changes = new Map(pending);
      pending.clear();

      const labels = [...changes.keys()].map(f =>
        path.relative(process.cwd(), f)
      );
      console.log(`\n[watch] Content changed: ${labels.join(', ')}`);

      try {
        const { updateFiles, main } = await import('./index-content');
        try {
          await updateFiles(changes);
          console.log('[watch] Content updated.');
        } catch (incrementalErr) {
          console.error('[watch] Incremental update failed:', incrementalErr);
          console.log('[watch] Falling back to full rebuild...');
          await main();
          console.log('[watch] Full rebuild complete.');
        }
        broadcastReload();
      } catch (err) {
        console.error('[watch] Rebuild failed:', err);
      }
    }, 500);
  };

  // chokidar v4 removed glob support — watch directories and filter in callbacks
  const isRelevant = (f: string) =>
    f.endsWith('.mdx') ||
    f.endsWith('.problems.json') ||
    path.basename(f) === 'extraProblems.json';

  const watcher = chokidar.watch([CONTENT_DIR, SOLUTIONS_DIR], {
    ignoreInitial: true,
    awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 },
  });

  watcher.on('change', f => {
    if (isRelevant(f)) scheduleRebuild('change', f);
  });
  watcher.on('add', f => {
    if (isRelevant(f)) scheduleRebuild('add', f);
  });
  watcher.on('unlink', f => {
    if (isRelevant(f)) scheduleRebuild('unlink', f);
  });

  console.log('[watch] Watching content/ and solutions/ for changes...');
}

watchContent().catch(err => {
  console.error(err);
  process.exit(1);
});
