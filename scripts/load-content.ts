async function needsRebuild(): Promise<boolean> {
  const { access } = await import('fs/promises');
  const { DB_FILE } = await import('../src/lib/constants');
  // In production, always rebuild
  // if (process.env.NODE_ENV === 'production') return true;

  try {
    // Check if both cache files exist
    await access(DB_FILE);
    console.log(
      'Using cached content. Run with NODE_ENV=production to force rebuild.'
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
    await import('./index-content');
  }
}

load();
