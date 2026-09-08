async function needsRebuild(): Promise<boolean> {
  const { access } = await import('fs/promises');
  const { DB_FILE } = await import('../src/lib/constants');
  // In production, always rebuild
  // if (process.env.NODE_ENV === 'production') return true;

  try {
    // Check if both cache files exist
    await access(DB_FILE);
    console.log(
      'Using cached content. Run `yarn dev:watch` to pick up content edits, ' +
        'or delete data/content.db to force a rebuild.'
    );
    return false;
  } catch (error) {
    // If any cache file is missing, rebuild everything
    return true;
  }
}

async function load() {
  console.log('Starting to load content...');
  const rebuild = await needsRebuild();
  if (rebuild) {
    const { main } = await import('./index-content');
    await main();
  } else {
    // public/usaco-divisions.json is gitignored and only rewritten when a
    // .problems.json changes, so it can be missing next to a valid cache.
    const { ensureUsacoDivisionsJson } = await import('./index-content');
    if (await ensureUsacoDivisionsJson()) {
      console.log('Regenerated public/usaco-divisions.json.');
    }
  }
}

load();
