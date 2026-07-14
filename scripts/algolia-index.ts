import { getAlgoliaRecords } from '../src/utils/algolia-queries';
import searchClient from '../src/utils/algoliaSearchClient';

const dryRun = process.argv.includes('--dry-run');

async function fetchExistingHashes(
  indexName: string
): Promise<Map<string, string>> {
  const hashes = new Map<string, string>();
  try {
    await searchClient.browseObjects({
      indexName,
      browseParams: {
        query: '',
        attributesToRetrieve: ['objectID', '_contentHash'], // minimize payload per page
      },
      aggregator: response => {
        for (const hit of response.hits) {
          const h = hit as { objectID: string; _contentHash?: string };
          if (h._contentHash) {
            hashes.set(h.objectID, h._contentHash);
          }
        }
      },
    });
  } catch (err: unknown) {
    const status = (err as { status?: number })?.status;
    if (status === 404) {
      console.log(`Index ${indexName} not found yet, treating as empty`);
    } else {
      throw err;
    }
  }
  return hashes;
}

async function syncIndex(
  indexName: string,
  records: Array<Record<string, unknown>>
) {
  const existingHashes = await fetchExistingHashes(indexName);

  const toSave: typeof records = [];
  const seenIds = new Set<string>();

  for (const record of records) {
    seenIds.add(record.objectID as string);
    if (existingHashes.get(record.objectID as string) !== record._contentHash) {
      toSave.push(record); // new record, or content changed since last sync
    }
  }

  // Deletion is scoped to records this script previously wrote (had a hash)
  // and that are absent from the current run's output.
  const toDelete = [...existingHashes.keys()].filter(id => !seenIds.has(id));

  if (dryRun) {
    const unchanged = records.length - toSave.length;
    console.log(
      `[dry-run] ${indexName}: ${toSave.length} would update, ${toDelete.length} would delete, ${unchanged} unchanged (${existingHashes.size} previously tracked)`
    );
    return { updated: toSave.length, deleted: toDelete.length, unchanged };
  }

  if (toSave.length > 0) {
    await searchClient.saveObjects({
      indexName,
      objects: toSave,
      waitForTasks: true,
    });
  }
  if (toDelete.length > 0) {
    await searchClient.deleteObjects({
      indexName,
      objectIDs: toDelete,
      waitForTasks: true,
    });
  }

  const unchanged = records.length - toSave.length;
  console.log(
    `${indexName}: ${toSave.length} updated, ${toDelete.length} deleted, ${unchanged} unchanged (${existingHashes.size} previously tracked)`
  );

  return { updated: toSave.length, deleted: toDelete.length, unchanged };
}

async function runIndexing() {
  if (!process.env.ALGOLIA_APP_ID) {
    console.log('Algolia app ID not found - skipping indexing');
    return;
  }

  if (dryRun) {
    console.log('Running in dry-run mode — no writes or deletes will be sent');
  }

  try {
    const groups = await getAlgoliaRecords();

    const results = await Promise.all(
      groups.map(({ records, indexName }) => syncIndex(indexName, records))
    );

    const totals = results.reduce(
      (acc, r) => ({
        updated: acc.updated + r.updated,
        deleted: acc.deleted + r.deleted,
        unchanged: acc.unchanged + r.unchanged,
      }),
      { updated: 0, deleted: 0, unchanged: 0 }
    );

    const prefix = dryRun ? '[dry-run] ' : '';
    console.log(
      `${prefix}Algolia indexing complete. Total: ${totals.updated} updated, ${totals.deleted} deleted, ${totals.unchanged} unchanged`
    );
  } catch (error) {
    console.error('Algolia indexing failed:', error);
    process.exit(1);
  }
}

runIndexing().catch(console.error);
